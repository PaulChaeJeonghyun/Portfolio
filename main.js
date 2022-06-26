'use strict';

const navbar = document.querySelector('#navbar');
// console.log(window.scrollY)
// console.log(`navbarHeight: ${navbarHeight}`);
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
   if (window.scrollY > navbarHeight) {
      navbar.classList.add('navbar__dark');
   } else {
      navbar.classList.remove('navbar__dark');
   }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
   const target = event.target;
   const link = target.dataset.link;
   if (link == null) {
      return;
   }
   // console.log(event.target.dataset.link);
   const scrollTo = document.querySelector(link);
   scrollTo.scrollIntoView({behavior: 'smooth'});
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
   navbarMenu.classList.toggle('open');   
});


   // Handle click on "contact me" button on home
   const homeContactBtn = document.querySelector('.home__contact');
   homeContactBtn.addEventListener('click', () => {
      const scrollTo = document.querySelector('#contact');
   scrollTo.scrollIntoView({behavior: 'smooth'})});
   

// Make home slowly fade to transparent as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
   home.style.opacity = 1 - window.scrollY / homeHeight});


// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', ()=> {
   if(window.scrollY > homeHeight / 2) {
   arrowUp.classList.add('visible');
   } else {
      arrowUp.classList.remove('visible');   
   }
});


// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
   const scrollTo = document.querySelector('#home');
   scrollTo.scrollIntoView({behavior: 'smooth'});
});