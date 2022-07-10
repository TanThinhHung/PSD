//**show menu-mobile */
const nav__mobile = document.querySelector('.nav__menu-mobile');
console.log(nav__mobile);
const header__nav = document.querySelector('.header__nav');
console.log(header__nav);
nav__mobile.addEventListener('click', function() {
    this.classList.toggle('is_show');
    header__nav.classList.toggle('is_show_menu');

});
// window.addEventListener('click', function(e) {

//     if (header__nav.contains(e.target)) {
//         header__nav.classList.remove('is_show_menu');
//         this.alert(1);
//         console.log(e.target);
//     }
// })