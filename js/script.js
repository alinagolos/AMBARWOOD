let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  const menuLink = document.querySelector('.header__menu-item--active');
  const subMenu = document.querySelector('.header__submenu');

  menuLink.addEventListener('click', function () {
    subMenu.classList.toggle('submenu--open');
  });
} else {
  body.classList.add('mouse');
}

const menuBtn = document.querySelector('.header__btn-burger');
const menuMobile = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('nav--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});
