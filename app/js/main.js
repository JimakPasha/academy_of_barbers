$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list,.menu__btn,.header,.header__content-inner').toggleClass('active');
  });

  $('.menu a').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });
  
  $('.reviews-slider__items').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="стрелка-назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="стрелка-вперёд"></button>'
  });

});