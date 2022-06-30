const burger = document.querySelector('.burger');
const burger_open = document.querySelector('.nav-dots');
const burger_close = document.querySelector('.icon-tabler');

burger_open.addEventListener('click', () => {
    burger.style.transform = 'translateX(0%)';
})
burger_close.addEventListener('click', () => {
    burger.style.transform = 'translateX(100%)';
})
