$(document).ready(function () {

    $('.owl-one').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            575: {
                items: 1,
                nav: true,
                dots: false
            },
            991: {
                items: 1,
                nav: true,
                dots: false
            },
            1199: {
                items: 1,
                nav: true,
                dots: false
            }
        }
    });

    $('.owl-four').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                nav: true,
                dots: false
            },
            991: {
                items: 3,
                nav: true,
                dots: false
            },
            1199: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    });

    $('.owl-five').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                nav: true,
                dots: false
            },
            991: {
                items: 4,
                nav: true,
                dots: false
            },
            1199: {
                items: 5,
                nav: true,
                dots: false
            }
        }
    });

    $('.owl-six').owlCarousel({
        loop: true,
        margin: 50,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: true
            },
            575: {
                items: 3,
                nav: false,
                dots: true
            },
            991: {
                items: 4,
                nav: false,
                dots: true
            },
            1199: {
                items: 6,
                nav: false,
                dots: true
            }
        }
    });

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

    $('.aside ul li').has('ul').append('<span class="touch-button"><i>open</i></span>');
    $('.touch-button').click(function () {
        $(this).prev().slideToggle(200);
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.btn-plus').click(function () {
        $('.qty-input').val(Number($('.qty-input').val()) + 1);
    });
    $('.btn-minus').click(function () {
        var value = Number($('.qty-input').val()) - 1;
        if (value > 0) {
            $('.qty-input').val(value);
        }
    });

    $(function () {
        $.scrollUp({
            scrollSpeed: 200,
            scrollImg: true
        });
    });

});
