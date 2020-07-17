<<<<<<< HEAD
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

  let showSubMenu = function(){
    $('#js-main-menu > li > a').on('click', function (e) {

    	if($(this).next().hasClass('sub-menu')){
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
});



=======
"use strict";

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
  var mainMenu = $('#js-main-menu');

  var showSubMenu = function showSubMenu() {
    $('#js-main-menu > li > a').on('click', function (e) {
      if ($(this).next().hasClass('sub-menu')) {
        e.preventDefault();
        $(this).next().slideToggle();
      }
    });
  };

  showSubMenu();

  var sandwitch = function sandwitch() {
    $('.sandwitch').on('click', function () {
      mainMenu.toggleClass('active');
      $(this).toggleClass('sandwitch--active');
    });
  };

  sandwitch();

  var fullscreenMenuAction = function fullscreenMenuAction() {
    var fullscreenMenu = $('#js-fullscreen-menu');
    fullscreenMenu.addClass('show');
    $('#js-fullscreen-menu .fullscreen-menu__item').on('mouseenter', function () {
      var dataFullscreenMenu = $(this).attr('data-fullscreen-menu');

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
>>>>>>> 14af30ac2c10c8367d2c3af4db809ee591b21edb
