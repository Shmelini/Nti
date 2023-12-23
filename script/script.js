const cartBtn = document.querySelector('.header-bot__btn-cart');
const cartBlock = document.querySelector('.cart-main')
const burger = document.querySelector('.burger')
const burgerOpenBtn = document.querySelector('.burger-open-btn')
const burgerCloseBtn = document.querySelector('.burger-close-btn')
const form = document.querySelector('.form')
const popup = document.querySelector('.popup-container')
const popupCloseBtn = document.querySelector('.popup-btn')
const formInputs = form.querySelectorAll('.search-input')

cartBtn.addEventListener('mouseover', () => {
    cartBlock.classList.remove('disabled')
})

cartBlock.addEventListener('mouseleave', () => {
    cartBlock.classList.add('disabled')
})

burgerOpenBtn.addEventListener('click', () => {
    burger.classList.remove('disabled')
    document.body.classList.add('no-scroll')
})

burgerCloseBtn.addEventListener('click', () => {
    burger.classList.add('disabled')
    document.body.classList.remove('no-scroll')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    popup.classList.remove('disabled')
    formInputs.forEach((formInput) => {
        formInput.value = ''
    })
    document.body.classList.add('no-scroll')
})

popupCloseBtn.addEventListener('click', () => {
    popup.classList.add('disabled')
    document.body.classList.remove('no-scroll')
})



