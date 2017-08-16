$(document).on("click", "a", function() {
   	//this == the link that was clicked
   	   var href = $(this).attr("href");
    	if (href.indexOf("gmanetwork") !== -1){
    		alert("Accessing GMA News");
    	}
    if(href.search("news.abs-cbn") !== -1){
    	alert("Accessing ABS-CBN News");
    }
});

