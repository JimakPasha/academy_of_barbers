$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list,.menu__btn,.header__content-inner').toggleClass('active');
  });

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