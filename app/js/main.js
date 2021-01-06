$(function () {

  $('.menu a').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });
  
  $('.reviews-slider__items').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500
  });

});