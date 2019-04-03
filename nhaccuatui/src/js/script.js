// $(document).ready(function(){
//     $(".slider1").owlCarousel({
//         items: 1,
//         // margin: 10,
//         // mỗi lần thuộc tính mới thì trước thuộc tính phải có dây phẩy
//         loop: true,
//         center: true,
//         nav: true,
//         // navText: ['<img src="https://picsum.photos/31/31" />','<img src="https://picsum.photos/38/38" />']
//     });
//     $(document).ready(function(){
//         $(".slider").owlCarousel({
//             items: 4,
//             loop: true,
//             center: true,
//             nav: true,
//         });
//       });
    
//     var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.fas.fa-chevron-right').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.fas.fa-chevron-left').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })
//   });
$(document).ready(function(){
    $(".list-tabs ul li").click(function (e) {
        e.preventDefault();
        $('.list-tabs ul li a').removeClass('active')
        $(this).find('a').addClass(".active")
        var index = ($this).index()
        // console.log($this).index()
        $('tab-content .tab').hide()
        // $('tab-content .tab').removeClass('.active')
        // $('tab-content .tab').eq(index).addClass('.active')
        $('tab-content .tab').eq(index).show()
    });
});

  
    