/**
 * @file myScript.js
 * Script to analyze Facebook feed and make connection with the server
 *
 * @author Mark Craft, Qinglin Chen
 * @date Fall 2016
 */
(function(document) {
'use strict';
var feeds = new Set();
function text(res) {
	return res.text();
}
/**
 * Http request to www.projectfib.com/verify.
 *
 * @param url to send to the server.
 * @param the type of information sent
 * @param the location to put the button
 */
function httpGet(input, type, data, comments, likes) {
  // This calls our backend API that simply returns text. We do not execute any code returned from this API
	var server = "https://www.projectfib.com/verify";
	var contents = "?content=";
	var page = (type=="url")? decode(input) : input;
	var theUrl = server + contents + page;
	theUrl = theUrl.replace("&", "^") + "&comments=" + comments + "&likes=" + likes;

	//console.log("Type: " + type + " : " + page);
  // This calls our backend API that simply returns text. We do not execute any code returned from this API
	fetch(theUrl)
		.then(text).then(function(text) {
			var btn = document.createElement('div'),
				button = Ladda.create(btn);
				btn.style = "font-weight:bold; padding: 3px; position:absolute; top: 4px; right: 30px;background: #3b5998; font-size: 15px;";
			if (text=="verified") {
				btn.innerHTML = "verified";
				btn.style.color = "#FFFFFF";
				data.appendChild(btn);
			} else if (text.includes("not verified")) {
				btn.innerHTML = "not verified";
				btn.style.color = "#E74C3C";
				data.appendChild(btn);
			}
		});

}

// This calls our backend API that simply returns text. We do not execute any code returned from this API
function httpSend(data) {
	var server = "https://www.projectfib.com/verify?content=";
	var theURL = server + data;

	fetch(theURL);
}

/**
 * Create a button on the screen
 *
 * @param location of the button
 * @param the text to display on the button
 * @param whether the server is down or not
 */
function createButton(btn, loc) {
	var btn = document.createElement('div'),
		button = Ladda.create(btn);
	//btn.addEventListener("mouseover", hoverTooltip.bind(text), false);

	btn.innerHTML = "server down";
	btn.style = "font-weight:bold; padding: 3px; position:absolute; top: 4px; right: 30px;background: #3b5998; font-size: 15px; color: #FFFFFF;";

	loc.appendChild(btn);
}

/**
 * Display tooltip with more accurate information
 *
 * @param the information to display
 */
function hoverTooltip(info) {
	//console.log("hovering: " + info);
}

/*
 * Parse through Facebook's encoded url for the actual url
 *
 */
function decode(code) {

	var res = "" + code;
	res = res
		.replace("http://l.facebook.com/l.php?u=", "")
		.replace("https://l.facebook.com/l.php?u=", "")
		.replace(/%3A/gi, ":")
		.replace(/%F/gi, "/")
		.replace(/%2F/gi, "/");

	var end = res.substr(res.indexOf("^h"), res.length);
	res = res.replace(end, "");
	var end2 = res.substr(res.indexOf("&"), res.length);
	res = res.replace(end2, "");

	return res;
}

/*
 * Get the number of Facebook likes
 *
 */
function getLikes(string) {
	return 1*(string.split(",").length) + 1*(string.includes("and")) +
		   1*((string.match(/\d/g)).join(""));
}

/**
 * Receive each Facebook post and analyze texts, urls, pics for validity.
 * Refreshes every second.
 *
 */
setInterval(function() {

	var test = document.getElementsByClassName('_4-u2 mbm _5v3q _4-u8');

	for(var i=0; i<test.length; i++) {

		var data = test[i];

		// Check if feed needs to be modified

		if(!feeds.has(data)) {
			feeds.add(data);

			// Send server requests

			var statement = "";

			var processed = false;

			var comments = 0;

			var hasComment = test[i].querySelector('._3b-9');
			if(hasComment && hasComment.querySelector('div')) {
				comments = Math.max(hasComment.querySelector('div').getElementsByClassName('UFIRow').length - 1, 0);
				//httpSend(comments);
			}

			var likes = 0;

			var hasLike = test[i].querySelector('._4arz')
			if(hasLike && hasLike.innerHTML) {
				var likePos = hasLike.innerHTML;
				var likeStart = likePos.indexOf(">");
				var likeString = likePos.substr(likeStart+1, likePos.indexOf("</")-likeStart-1)
				likes = getLikes(likeString)
				//httpSend(likes);
			}

			var linked = test[i].querySelector('._6ks');
			if(!processed && linked != null && linked.querySelector('a') != null) {
				processed = true;
				httpGet(linked.querySelector('a').href, "url", data, comments, likes);
			}


			var link = test[i].querySelector('._5pbx.userContent');
			if(!processed && link != null && link.querySelector('a') != null && link.querySelector('a').href != null) {
				processed = true;
				httpGet(link.href, "url", data, comments, likes);
			}


			var picComment = test[i].querySelector('.uiScaledImageContainer._4-ep');
			if(!processed && picComment != null && picComment.querySelector('img') != undefined && picComment.querySelector('img').src != null) {
				processed = true;
				httpGet(picComment.querySelector('img').src, "image", data, comments, likes);
			}

			var picPost = test[i].querySelector('._46-h._517g');
			if(!processed && picPost != null && picPost.querySelector('img') != undefined && picPost.querySelector('img').src != null) {
				processed = true;
				httpGet(picPost.querySelector('img').src, "image", data, comments, likes);
			}

			var picTagged = test[i].querySelector('._4-eo._2t9n');
			if(!processed && picTagged != null && picTagged.querySelector('._46-h._4-ep') != null && picTagged.querySelector('._46-h._4-ep').querySelector('img') != null) {
				processed = true;
				httpGet(picTagged.querySelector('._46-h._4-ep').querySelector('img').src, "image", data, comments, likes);
			}

			/*
			var picAlbum = test[i].querySelector('._2a2q');
			if(!processed && picAlbum != null && picAlbum.querySelectorAll('._5dec._xcx')!=undefined) {
				processed = true;
				var pics = picAlbum.querySelectorAll('a._5dec._xcx');
				for(var i=0; i<pics.length; i++) {}
			}
			*/

			var text = test[i].querySelector('._5pbx.userContent');
			if(!processed && text != null && text.textContent != null) {
				processed = true;
				httpGet(text.textContent, "text", data, comments, likes);
			}

		}
	}

}, 1000);

})(document);
