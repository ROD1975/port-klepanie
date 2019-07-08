const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
// const links = document.querySelectorAll('.nav-links li');
const navItem = document.querySelectorAll('.nav-item');



navItem.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  });


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})



