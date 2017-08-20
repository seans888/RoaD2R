
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

  
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.");
}
else{
	window.alert("Database is supported in this browser");
}

	