const swiper = new Swiper('.swiper-hero-main', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  spaceBetween: 20,
})

const swiperDiscount = new Swiper('.swiper-discount-main', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 5,
    }
  }
})

const swiperCategory = new Swiper('.swiper-category', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    375: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 5,
    }
  }
})