//FONCTION POUR LE MENU DE LA PAGE A L'AFFICHE

$(document).ready(function() {
    var triItem3 = $(".aff-menu-txt"),
        actuItem3 = $(".slider-aff-elt");

        triItem3.click(function () {
            triItem3.removeClass("active");
            $(this).addClass("active");
            var dataClass = $(this).data("class");
            console.log(dataClass);
            
            actuItem3.each(function() {
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
