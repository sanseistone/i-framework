$(document).ready(function () {
    $('.slider-summary').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.slider-pic'
    });
    $('.slider-pic').slick({
        asNavFor: '.slider-summary',
        // dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 600,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slide-detail').slick({
        dots: true,
        arrows: true,
        speed: 300,
        customPaging: function (slider, i) {
            return '<button class="thumbnail">' + $(slider.$slides[i]).find('img').prop('outerHTML') + '';
        }
    });

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        dots: true,
        asNavFor: '.slider-thumbs',
        customPaging: function (slider, i) {
            return '<button class="thumbnail">' + $(slider.$slides[i]).find('img').prop('outerHTML') + '';
        }
    });
    $('.slider-thumbs').slick({
        asNavFor: '.slider-main',
        // dots: true,
        vertical: true,
        verticalSwiping: true,
        // centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        focusOnSelect: true,
    });

    $('.slide-brand').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
