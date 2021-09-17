$(document).ready(function() {
    $(function() {
        $('.secondSection').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // arrows: true,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            centerMode: true,
            prevArrow: ' <span><i class="prev_arrow fas fa-3x fa-angle-left"></i></span>',
            nextArrow: ' <span><i class="next_arrow fas fa-3x fa-angle-right"></i></span>',
            centerPadding: '0,'
        })
    })
    });