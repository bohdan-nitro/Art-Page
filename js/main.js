class Parallax {
    constructor(scene) {

    }

}

$(document).ready(function () {

    //  Header functions
    var headerWrap = '.header';

    $(document).scroll(function () {

        var topOffset = $(this).scrollTop();

        if (topOffset >= 85) {
            $(headerWrap).removeClass('white');
            $(this).on(function () {
               $(this).fadeIn(500, function () {

               });
            });

        } else {
            $(headerWrap).addClass('white');

        }

        $('span').on(function () {
            $(this).toggleClass('black');
            $(this).toggle("src", "../img/logo_icon.svg");
        });

    });






});