//     BURGER ANIMATION     //
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const opacityMenu = document.querySelector(".opacity");

const showNav = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
burger.addEventListener('click', showNav);

// NAV ANIMATION FOR SCROLL //

const nav = document.querySelector('nav');

window.onscroll = function (){ NavScroll()}

function NavScroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        nav.style.top = "0";
    } else{
        nav.style.top = "-100px";
    }
}