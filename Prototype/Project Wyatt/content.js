$(document).on("click", "a", function() {
   	//this == the link that was clicked
   	   var href = $(this).attr("href");
    	/*if (href.indexOf("gmanetwork") !== -1){
    		alert("Accessing Gma");
    	}*/
    if(href.search("news.abs-cbn"||"gmanetwork") !== -1){
    	alert("This website is authentic");
    }
});

