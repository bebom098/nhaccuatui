$(document).ready(function () {
    $(".container>ul>li>a").click(function (e) {
        e.preventDefault();
        $(this).find(".dropdown").slideToggle()
        if ($(this).find('.row').hasClass('rotate')) {
            $(this).find('.row').removeClass('rotate')
        }
        else {
            $(this).find('.row').addClass('rotate')
        }
    })
});