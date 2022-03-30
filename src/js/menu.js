//FONCTION POUR LE MENU

$(document).ready(function() { 
    var menuActif = $(".menu");
 
    menuActif.click(function() {  
        $(this).addClass("menu-clic"); 
    });
});
