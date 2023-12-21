const swiper = new Swiper('.swiper-hero-main', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  spaceBetween: 20
})

const swiperDiscount = new Swiper('.swiper-discount-main', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  slidesPerView: 4,
  spaceBetween: 20
})

const swiperCategory = new Swiper('.swiper-category', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  slidesPerView: 4,
  spaceBetween: 20
})