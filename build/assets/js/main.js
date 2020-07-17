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



