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

