// Create Smooth Scrolling In JQuery

// Event pada saat Link di Klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    let tujuan = $(this).attr('href');
    // tangkap elemen ybs (dari href)
    let elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 10
    }, 1100, 'easeInOutExpo');

    e.preventDefault();
});

// parallax effect
// about
// $(window).on('load', function() {
//     $('.leftParagraph').addClass('paragraphAppears');
//     $('.rightParagraph').addClass('paragraphAppears');
// });

// projects
// $(window).scroll(function() {
//     let windowScroll = $(this).scrollTop();

//     // jumbotron
//     $('.jumbotron img').css({
//         'transform' : 'translate(0px, '+ windowScroll/6 +'%)'
//     });

//     $('.jumbotron h1').css({
//         'transform' : 'translate(0px, '+ windowScroll/4 +'%)'
//     });

//     $('.jumbotron p').css({
//         'transform' : 'translate(0px, '+ windowScroll/2 +'%)'
//     });

//     // $('.jumbotron svg').css({
//     //     'transform' : 'translate(0px, '+ windowScroll/8 + '%)'
//     // });

//     // projects
//     if( windowScroll > $('.projects').offset().top - 200 ) {
//         $('.projects .card').each(function(i) {
//             setTimeout(function() {
//                 $('.projects .card').eq(i).addClass('appears');
//             }, 300 * (i + 1));
//         });
        
//     }

// });