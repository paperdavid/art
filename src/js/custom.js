/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {

		/* Custom */

		//= ./common/likely.js
		//= ./common/owl.carousel.min.js
		//= ./common/jquery.chocolate.js


 $('.chocolat-parent').Chocolat();

	$('.loop').owlCarousel({
			center: true,
			items:1,
			loop:true,
			autoplay:3000,
			margin:100,
			autoplaySpeed:1000,
			navSpeed: 1000,
			dotsSpeed: 1000,
	});

	$('.about').owlCarousel({
			center: true,
			items:3,
			autoplay:2000,
			loop:true,
			margin:10,
			responsive:{
						0:{
								items:1
						},
						600:{
								items:2
						},
						1000:{
								items:3
						}
			}
	});
});