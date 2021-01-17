$('.slider__item').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});

$('.header__burger').click(function (event) {
  $('.header__burger,.header__menu').toggleClass('active');
});

$('.slider-dots__item-1').on('click', function () {
  $('.slider__body').addClass('active-1');
  $('.slider__body').removeClass('active-2');
  $('.slider__body').removeClass('active-3');
  $('.slider__item-1').addClass('active').siblings().removeClass('active');
});
$('.slider-dots__item-2').on('click', function () {
  $('.slider__body').addClass('active-2');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-3');
  $('.slider__item-2').addClass('active').siblings().removeClass('active');
});
$('.slider-dots__item-3').on('click', function () {
  $('.slider__body').addClass('active-3');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-2');
  $('.slider__item-3').addClass('active').siblings().removeClass('active');
});

$('.slider__item-1').on('click', function () {
  $('.slider__body').addClass('active-1');
  $('.slider__body').removeClass('active-2');
  $('.slider__body').removeClass('active-3');
});
$('.slider__item-2').on('click', function () {
  $('.slider__body').addClass('active-2');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-3');
});
$('.slider__item-3').on('click', function () {
  $('.slider__body').addClass('active-3');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-2');
});



let select = function () {
  let selectHeader = document.querySelectorAll('.menu-select__header');
  let selectItem = document.querySelectorAll('.menu-select__item');
  let menuBtn = $('.menu-select');
  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  // selectImg.forEach(item => {
  //   item.addEventListener('click', selectChoose)
  // });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let img = this.querySelector('img').outerHTML;
    let text = this.innerHTML,
      select = this.closest('.menu-select'),
      currentText = select.querySelector('.menu-select__current');
    currentText.innerHTML = img;

    select.classList.remove('is-active');
  }
  $(document).click(function (e) {
    if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0) {
      menuBtn.removeClass('is-active');
    };
  });

};

select();



$('.slider-about__body').slick({
  // appendArrows: $('.slider-about'),
  prevArrow: "<img class='btn btn-prev slick-prev' src='img/about-arrow-left.svg' alt=''>",
  nextArrow: "<img class='btn btn-next slick-next' src='img/about-arrow-right.svg' alt=''>",
  // arrows: true,
  dots: true,
  // adaptiveHeight: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // speed: 500,
  // infinite: false,
  // autoplay: true, 
  // autoplaySpeed: 3000,
  // draggable: true,
  // swipe: true,
  // touchThreshold: 10,
  // touchMove: true,
  // waitForAnimate: true,
  // centerMode: false,
  // variableWidth: false,

  // fade: false,
  // appendDots:$('.needclass'),  
});

$('.slider-laptop__body').slick({
  appendArrows: $('.slider-laptop__arrows'),
  appendDots: $('.slider-laptop__dots'),
  prevArrow: "<img class='btn btn-prev slick-prev' src='img/black-left-arrow.svg' alt=''>",
  nextArrow: "<img class='btn btn-next slick-next' src='img/black-right-arrow.svg' alt=''>",
  // arrows: true,
  dots: true,
  // adaptiveHeight: true,
  slidesToShow: 1.5,
  slidesToScroll: 1.5,
  // speed: 500,
  infinite: false,
  // autoplay: true, 
  // autoplaySpeed: 3000,
  // draggable: true,
  // swipe: true,
  // touchThreshold: 10,
  // touchMove: true,
  // waitForAnimate: true,
  // centerMode: false,
  // variableWidth: false,

  // fade: false,
  // appendDots:$('.needclass'),

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
});

$(".slider-laptop").on('afterChange', function (event, slick, currentSlide) {
  $('.slider-laptop__arrows span').text(Math.round(currentSlide + 0.5));
});

const animItems = document.querySelectorAll('.anim__item');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(e) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemsHeight = animItem.offsetHeight;
      const animItemsOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemsHeight / animStart;

      if (animItemsHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemsHeight / animStart
      }
      if ((pageYOffset > animItemsOffset - animItemPoint) && pageYOffset < (animItemsOffset + animItemsHeight)) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop, left: rect.left + scrollLeft
      
    }
  }
}

$(".our-proj__item").hover(

  function () {
    $(this).addClass("hover");
  }, function () {
    $(this).removeClass("hover");
  }
);
$(document).ready(function () {
  $(".tel__mask").mask("+3 (999) 99-99-999");
});



  let images = $('.slick-active');
  let sliderItem1 = $('.slider-about__item-1');
  let sliderItem2 = $('.slider-about__item-2');
  let sliderItem3 = $('.slider-about__item-3');
  let sliderItem4 = $('.slider-about__item-4');
  if(sliderItem1.hasClass('slick-active')) {
    sliderItem1.children('.slider-about__images').addClass('pider');
    sliderItem2.children('.slider-about__images').removeClass('pider');
    sliderItem3.children('.slider-about__images').removeClass('pider');
    sliderItem4.children('.slider-about__images').removeClass('pider');
  }
  if(sliderItem2.hasClass('slick-active')) {
    sliderItem2.children('.slider-about__images').addClass('pider');
    sliderItem1.children('.slider-about__images').removeClass('pider');
    sliderItem3.children('.slider-about__images').removeClass('pider');
    sliderItem4.children('.slider-about__images').removeClass('pider');
  }
  if(sliderItem3.hasClass('slick-active')) {
    sliderItem3.children('.slider-about__images').addClass('pider');
    sliderItem2.children('.slider-about__images').removeClass('pider');
    sliderItem1.children('.slider-about__images').removeClass('pider');
    sliderItem4.children('.slider-about__images').removeClass('pider');
  }
  if(sliderItem4.hasClass('slick-active')) {
    sliderItem4.children('.slider-about__images').addClass('pider');
    sliderItem1.children('.slider-about__images').removeClass('pider');
    sliderItem3.children('.slider-about__images').removeClass('pider');
    sliderItem2.children('.slider-about__images').removeClass('pider');
  }
// sliderItem.children('.slider-about__images').addClass('pider');







