//FONCTION POUR LE MENU DE LA PAGE ACTUALITÉS

$(document).ready(function() {
    var triItem2 = $(".actu-menu-txt"),
        actuItem2 = $(".actualite-glob");

        triItem2.click(function () {
            triItem2.removeClass("active");
            $(this).addClass("active");
            var dataClass = $(this).data("class");
            console.log(dataClass);
            
            actuItem2.each(function() {
                //$(this).removeClass("sortedDown");
                if (!$(this).hasClass(dataClass)) {
                    $(this).addClass("sortedDown");
                }
                else {
                    $(this).removeClass("sortedDown");
                }
            });
        });
});