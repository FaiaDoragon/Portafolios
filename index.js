
import { banner, home } from "./sources/main.js";

const nav = document.querySelector('.nav');

window.addEventListener('scroll', function () {
    nav.classList.toggle('active', window.scrollY > 0)
})


document.getElementsByClassName('menu')[0].innerHTML = (banner.join(""))
document.getElementById('home').innerHTML = (home())