// $(document).ready(function() {

//     // Mobile nav

//     $('.js--mobile-nav').click(function() {
//         var nav = $('.js--nav-links');

//         nav.slideToggle(200);
//     });

// });

// function myFunction() {
//     var x = document.getElementByClass("nav-links-mobile");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

const openMobileNav = document.querySelector('.mobile-nav-open')
const mobileNavLinks = document.querySelector('.nav-links')
const closeMobileNav = document.querySelector('.mobile-nav-close')

// open menu

openMobileNav.addEventListener('click', (event) => {
    mobileNavLinks.classList.toggle('show-mobileNavLinks')
    console.log(event)
});



// close menu

// closeMobileNav.addEventListener('click', () => {
//     mobileNavLinks.classList.remove('.show-mobileNavLinks')
// });