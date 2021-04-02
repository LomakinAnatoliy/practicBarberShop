// all other code

$(document).ready(function(){

$('.menu__btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu__btn--close');
  $(this).toggleClass('menu__btn--open');
});

$('.menu__btn').click(function(){
  $('.menu__wrap .menu__item').not('.menu__item--active').slideToggle(400);
});

$('.user__link').click(function(){
  $('.login').slideToggle(400);
});

$('.login__close').click(function(){
  $('.login').slideToggle(400);
});

if (window.screen.width <= 576) {
  $('.advantage__list').slick({
    dots: true,
    arrows: false
  });
} 

  $('.reviews__container').slick({
    prevArrow: '<button class="reviews__button-back button" type="button"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="reviews__button-next button" type="button"><span class="visually-hidden">Вперед</span></button>',
    dots: true
  });
});

