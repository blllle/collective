$(function () {
  $('.menu-toggle').on('click', function () {

    $('.offscreen').toggleClass('open');
    $('body').toggleClass('menu-open');

  });


  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
      $(".header").addClass("active");
      $(".menu-toggle-svg").addClass("scrolled");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("active");
      $(".menu-toggle-svg").removeClass("scrolled");
    }
  });


});
