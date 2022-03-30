//FONCTION POUR LE MENU DE LA PAGE D'ACCUEIL

$(document).ready(function() { 
    var triItem = $(".home-menu-txt"),
        actuItem = $(".sec-home-affiches");
        actuItemToShow = $(".sec-home-affiches-2");
 
    triItem.click(function() { 
        var toSortId = $(this).attr("id"); 
        $(".active").removeClass("active"); 
        $(this).addClass("active"); 
 
       
        if(toSortId == "all") {
            actuItem.each(function() {
	        $(this).removeClass("sortedDown");
            });
            actuItemToShow.each(function() {
                $(this).addClass("sortedDown");
                });
        }
       
        else {
	    actuItem.each(function() { 
	        if($(this).hasClass(toSortId)) { 
	            $(this).removeClass("sortedDown"); 
	        }
 
	        else { 
	            $(this).addClass("sortedDown"); 
	        }
        });
        actuItemToShow.each(function() { 
	        if($(this).hasClass(toSortId)) { 
	            $(this).addClass("sortedDown"); 
	        }
 
	        else { 
	            $(this).removeClass("sortedDown"); 
	        }
	    });
        }
    });
});