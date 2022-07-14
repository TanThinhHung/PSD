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




//hàm counter up
const counter__number = document.querySelectorAll('.counter__number-item');
console.log(counter__number);
// const client = document.querySelector('.client');
// const winner = document.querySelector('.winner');
// const coffee = document.querySelector('.coffee');
// const member = document.querySelector('.member');

function count(el) {
    var numberEl = el.querySelector('.counter__number-number');
    console.log(numberEl);
    var to = parseInt(numberEl.innerText);
    console.log(typeof to);
    var count = 0;
    var time = 10;
    var step = to / time;
    const counting = setInterval(() => {
        count += step;
        if (count > to) {
            clearInterval(counting);
            numberEl.innerText = to;
        } else {
            numberEl.innerText = Math.round(count);
        }
    }, 100);

}
counter__number.forEach(item => {
        count(item);
    })
    // count(counter__number);
    // count(client, 123);
    // count(winner, 300);
    // count(coffee, 150);
    // count(member, 1000);