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

window.onscroll = function (){NavScroll()}

function NavScroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        nav.style.top = "5px";
    } else{
        nav.style.top = "-100px";
        menu.classList.add('active');
        burger.classList.remove('active');
    }
}

// SCROLL ANIMATION //
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}