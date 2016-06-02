/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {

		/* Custom */

		//= ./common/owl.carousel.min.js
		//= ./common/blueimp-gallery.js
		//= ./common/blueimp-gallery-fullscreen.js




	$('.main-page').owlCarousel({
			center: true,
			items:1,
			loop:true,
			autoplay:3000,
			margin:100,
			autoplaySpeed:1000,
			navSpeed: 1000,
			dotsSpeed: 1000,
			animateOut: 'fadeOut',
			mouseDrag: false
	});

	$('.artist').owlCarousel({
			center: true,
			items:1,
			loop:true,
			autoplay:3000,
			margin:100,
			autoplaySpeed:1000,
			navSpeed: 1000,
			dotsSpeed: 1000,
			animateOut: 'fadeOut',
			mouseDrag: false
})

	$('.exhibition').owlCarousel({
			center: true,
			items:1,
			loop:true,
			autoplay:3000,
			margin:100,
			autoplaySpeed:1000,
			navSpeed: 1000,
			dotsSpeed: 1000,
			animateOut: 'fadeOut',
			mouseDrag: false
	});

	$('.team-group').owlCarousel({
			center: true,
			items:1,
			loop:true,
			autoplay:3000,
			margin:100,
			autoplaySpeed:1000,
			navSpeed: 1000,
			dotsSpeed: 1000,
			animateOut: 'fadeOut',
			mouseDrag: false
	});

	document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
});
