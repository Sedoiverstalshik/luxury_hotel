const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', (e) => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
});



const swiper = new Swiper('.testimonials__swiper', {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },
});