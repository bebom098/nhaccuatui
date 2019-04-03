// $(document).ready(function () {
//     $("#main>.listmenu>ul>li>a").click(function (e) {
//         e.preventDefault();
//         $(this).siblings(".dropdown").slideToggle()
//         if ($(this).find('.row').hasClass('rotate')) {
//             $(this).find('.row').removeClass('rotate')
//         }
//         else {
//             $(this).find('.row').addClass('rotate')
//         }

//     })
// });
$(document).ready(function(){
    $(".list-tabs ul li a").click(function (e) {
        e.preventDefault();
        $('.list-tabs ul li a').removeClass('active')
        $(this).addClass(".active")

    });
});

  