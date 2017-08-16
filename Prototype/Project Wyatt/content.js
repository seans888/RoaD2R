$(document).on("click", "a", function() {
   	//this == the link that was clicked
   	   var href = $(this).attr("href");
    	/*if (href.indexOf("gmanetwork") !== -1){
    		alert("Accessing Gma");
    	}*/
    if(href.search("news.abs-cbn"||"gmanetwork") !== -1){
    	alert("This website is authentic");

        if (href.indexOf("gmanetwork") !== -1){
            alert("Accessing GMA News");
        }
        if(href.search("news.abs-cbn") !== -1){
        alert("Accessing ABS-CBN News");

    }

    if (http.search("adobochronicles") !== -1) {
        alert("This site is found to be Fake!");
    }


    

    }
});

