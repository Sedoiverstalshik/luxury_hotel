const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', (e) => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
});



const testimonials__slider = new Swiper('.testimonials__swiper', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },
});
const rooms__slider = new Swiper('.rooms__swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.rooms__pagination',
    clickable: true,
  },

});

