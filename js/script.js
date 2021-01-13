$('.slider__item').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

$('.slider-dots__item-1').on('click', function() {
  $('.slider__body').addClass('active-1');
  $('.slider__body').removeClass('active-2');
  $('.slider__body').removeClass('active-3');
  $('.slider__item-1').addClass('active').siblings().removeClass('active');
});
$('.slider-dots__item-2').on('click', function() {
  $('.slider__body').addClass('active-2');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-3');
  $('.slider__item-2').addClass('active').siblings().removeClass('active');
});
$('.slider-dots__item-3').on('click', function() {
  $('.slider__body').addClass('active-3');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-2');
  $('.slider__item-3').addClass('active').siblings().removeClass('active');
});

$('.slider__item-1').on('click', function() {
  $('.slider__body').addClass('active-1');
  $('.slider__body').removeClass('active-2');
  $('.slider__body').removeClass('active-3');
});
$('.slider__item-2').on('click', function() {
  $('.slider__body').addClass('active-2');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-3');
});
$('.slider__item-3').on('click', function() {
  $('.slider__body').addClass('active-3');
  $('.slider__body').removeClass('active-1');
  $('.slider__body').removeClass('active-2');
});




let select = function () {
  let selectHeader = document.querySelectorAll('.menu-select__header');
  let selectItem = document.querySelectorAll('.menu-select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.menu-select'),
          currentText = select.querySelector('.menu-select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();