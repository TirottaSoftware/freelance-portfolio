const button = document.querySelector('.btn-popup')
const close = document.querySelector('.popup-close')
const popup = document.querySelector('.popup')
const section = document.querySelector('#work-process');


button.addEventListener('click', () => {
    popup.classList.add('popup-active');
})

close.addEventListener('click', () => {
    popup.classList.remove('popup-active');
    section.scrollIntoView({ behavior: "smooth" })
})