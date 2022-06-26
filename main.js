'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// console.log(window.scrollY)
// console.log(`navbarHeight: ${navbarHeight}`);

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
})
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