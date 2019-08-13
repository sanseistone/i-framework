$(document).ready(function() {

	//	readmore-box
	$('.readmore-box').readmore({
		speed: 75,
		collapsedHeight: 200,
		moreLink: '<a class="more-link pill pink" href="#">もっと見る</a>',
		lessLink: '<a class="more-link pill pink" href="#">Close</a>'
	});

	//	OwlCarousel2 2.3.3
	$('.owl-four-item').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 50000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 4,
				nav: true
			}
		}
	})
	$('.owl-five-item').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 50000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			600: {
				items: 3,
				nav: false
			},
			1000: {
				items: 5,
				nav: true
			}
		}
	})
	$('.comment-list').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 50000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 1,
				nav: false
			},
			1000: {
				items: 1,
				dots: true,
				nav: false
			}
		}
	})

	//	jquery.scrollUp js
	$(function() {
		$.scrollUp({
			scrollSpeed: 200,
			scrollImg: true
		});
	});

});