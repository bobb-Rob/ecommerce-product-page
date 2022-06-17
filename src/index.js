import { insertCloseIcon } from './components/dom.js';
import './css/index.css';
import './css/slideshow.css';
import './css/headline.css';
import './css/cart.css';
import avatarImg from './images/image-avatar.png';
import courosalImg from './images/image-product-1.jpg';
import plusIcon from './images/icon-plus.svg';
import minusIcon from './images/icon-minus.svg';


const avatar = document.querySelector('.avatar');
const imgCourosal = document.querySelector('.img-courosal');
const plusIconEl = document.querySelector('.plus-icon');
const minusIconEl = document.querySelector('.minus-icon');

avatar.src = avatarImg;
imgCourosal.src = courosalImg;
plusIconEl.src = plusIcon;
minusIconEl.src = minusIcon;

// Menu onclick


const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    const menuEl = document.querySelector('.menu-container');
    const closeEl = insertCloseIcon(menuEl);
    closeEl.classList.add('close');

    document.querySelector(".menu-container").style.width = "85%";
    document.querySelector(".menu-container").style.padding = "3rem 2rem";

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector(".menu-container").style.width = "";
        document.querySelector(".menu-container").style.padding = "";
        closeEl.remove();
    })
});

const cart = [];

const innerCartBox = document.querySelector('.inner-cart-box');
