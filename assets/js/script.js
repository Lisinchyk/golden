jQuery(document).ready(function ($) {
    $('.menu__burger').click(function (event) {
        $('.menu__burger, .menu__list, .menu__layer').toggleClass('active');
        $('body').toggleClass('lock');
    });
});