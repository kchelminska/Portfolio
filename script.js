//     BURGER ANIMATION     //
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const opacityMenu = document.querySelector(".opacity");

const showNav = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
burger.addEventListener('click', showNav);
