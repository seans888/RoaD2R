
$(document).on("click", "a", function() {
   	   var href = $(this).attr("href");
    if(href.search("gmanetwork|gmanews|news.abs-cbn.com") !== -1){
    	alert("This website is AUTHENTIC!");
	}
	if(href.search("adobochronicles") !== -1){
		alert("This website is FAKE!");
	}
/*
else{
	alert("This website is fake")
	}
*/
})
 
 //Database
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.");
}
else{
	window.alert("Database is supported in this browser");
}

