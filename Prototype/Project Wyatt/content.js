
$(document).on("click", "a", function() {
   	   var href = $(this).attr("href");
    if(href.search("gmanetwork|news.abs-cbn.com") !== -1){
    	alert("This website is authentic");
}
else{
	alert("This website is fake")
}
})


        if (href.indexOf("gmanetwork") !== -1){
            alert("Accessing GMA News");
        }
        if(href.search("news.abs-cbn") !== -1){
        alert("Accessing ABS-CBN News");

    }

    if (http.search("adobochronicles") !== -1) {
        alert("This site is found to be Fake!");
    }


    


window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

