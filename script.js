const openMobileNav = document.querySelector('.mobile-nav-open')
const mobileNavLinks = document.querySelector('.nav-links')
const closeMobileNav = document.querySelector('.mobile-nav-close')

// open menu

openMobileNav.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('show-mobileNavLinks')
});



// close menu

// closeMobileNav.addEventListener('click', () => {
//     mobileNavLinks.classList.remove('.show-mobileNavLinks')
// });