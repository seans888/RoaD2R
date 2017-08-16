//alert("updatezsdxx")
$(document).on("click", "a", function() {
   	//this == the link that was clicked
   	   var href = $(this).attr("href");
    	if (href.indexOf("gmanetwork") !== -1){
    		alert("Accessing Gma");
    	}
    if(href.indexOf("news.abs-cbn") !== -1){
    	alert("Accessing abs-cbn");
    }
});
