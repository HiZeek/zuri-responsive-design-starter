const openMobileNav = document.querySelector('.mobile-nav-open')
const mobileNavLinks = document.querySelector('.nav-links')

openMobileNav.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('show-mobileNavLinks')

    constslideToggle(200)
});
