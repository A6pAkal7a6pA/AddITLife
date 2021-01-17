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



// var block_show = null;

// function scrollTracking() {
//   var wt = $(window).scrollTop();
//   var wh = $(window).height();
//   var et = $('.training__image').offset().top;
//   var eh = $('.training__image').outerHeight();

//   if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
//     if (block_show == null || block_show == false) {
//       $('.training__image').addClass('_active');
//       $('.training__image .div-img-2').addClass('_active');
//     }
//     block_show = true;
//   } else {
//     if (block_show == null || block_show == true) {
//       $('.training__image').removeClass('_active');
//       $('.training__image .div-img-2').removeClass('_active');
//     }
//     block_show = false;
//   }
// }

// $(window).scroll(function () {
//   scrollTracking();
// });

// $(document).ready(function () {
//   scrollTracking();
// });




// function scrollTracking1() {
//   var wt = $(window).scrollTop();
//   var wh = $(window).height();
//   var et = $('.slick-active .slider-about__text').offset().top;
//   var eh = $('.slick-active .slider-about__text').outerHeight();

//   if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
//     if (block_show == null || block_show == false) {
//       $('.slider-about__images').addClass('_active');
//       $('.slider-about__images .div-img-2').addClass('_active');
//     }
//     block_show = true;
//   } else {
//     if (block_show == null || block_show == true) {
//       $('.slider-about__images').removeClass('_active');
//       $('.slider-about__images .div-img-2').removeClass('_active');
//     }
//     block_show = false;
//   }
// }

// $(window).scroll(function () {
//   scrollTracking1();
// });

// $(document).ready(function () {
//   scrollTracking1();
// });
// sliderItem.children('.slider-about__images').addClass('pider');







