const input = document.querySelector('#phone');

$('#phone').mask('(999) 999-9999');

window.intlTelInput(input, {
  separateDialCode: true,
  placeholderNumberType: 'MOBILE',
  autoPlaceholder: 'off',
  initialCountry: 'ru',
  preferredCountries: ['ru', 'kz', 'by'],
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
});

var swiper = new Swiper('.projects__swiper', {
  loop: true,
  cssMode: true,
  slidesPerGroup: 2,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.projects__btn-next',
    prevEl: '.projects__btn-prev',
  },
  pagination: {
    el: '.projects__pagination',
  },
  mousewheel: true,
  keyboard: true,
});

Fancybox.bind('[data-fancybox]', {});
