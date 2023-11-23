const toggleBtn = document.querySelector('.mobile-btn');
const menu = document.querySelector('.mobile-wrap');

// 열림버튼과 닫기버튼이 동일한 경우
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

AOS.init();
// main-visual Swiper
var swiper1 = new Swiper(".mySwiper-vis", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
// flavor Swiper
var swiper2 = new Swiper(".mySwiper-flavor", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});