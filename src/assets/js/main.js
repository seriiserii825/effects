$(function () {
	/*
		https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
		===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});
	let mainMenu = $('#js-main-menu');

	let showSubMenu = function () {
		$('#js-main-menu > li > a').on('click', function (e) {

			if ($(this).next().hasClass('sub-menu')) {
				e.preventDefault();
				$(this).next().slideToggle();
			}
		});
	};
	showSubMenu();

	let sandwitch = function () {
		$('.sandwitch').on('click', function () {
			mainMenu.toggleClass('active');
			$(this).toggleClass('sandwitch--active');
		});
	};
	sandwitch();

	let fullscreenMenuAction = function () {
		let fullscreenMenu = $('#js-fullscreen-menu');
		fullscreenMenu.addClass('show');

		$('#js-fullscreen-menu .fullscreen-menu__item').on('mouseenter', function () {
			let dataFullscreenMenu = $(this).attr('data-fullscreen-menu');

			if (fullscreenMenu.hasClass('show')) {
				console.log('Has class show');
				fullscreenMenu.removeClass('show');
				fullscreenMenu.css({
					'background-image': 'url(assets/i/fullscreen-menu/' + dataFullscreenMenu + ')'
				});

				setTimeout(function () {
					fullscreenMenu.addClass('show');
				}, 200);
			}

		});
	};
	fullscreenMenuAction();
});



