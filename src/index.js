import { insertCloseIcon, insertCartCard, product } from './components/dom.js';
import './css/index.css';
import './css/slideshow.css';
import './css/headline.css';
import './css/cart.css';
import avatarImg from './images/image-avatar.png';
import courosalImg from './images/image-product-1.jpg';
import plusIcon from './images/icon-plus.svg';
import minusIcon from './images/icon-minus.svg';
import Cart from './components/cart.js';


const avatar = document.querySelector('.avatar');
const imgCourosal = document.querySelector('.img-courosal');
const plusIconEl = document.querySelector('.plus-icon');
const minusIconEl = document.querySelector('.minus-icon');

avatar.src = avatarImg;
imgCourosal.src = courosalImg;
plusIconEl.src = plusIcon;
minusIconEl.src = minusIcon;

// display cart items
const displayCard = () => {    
    const innerCartBox = document.querySelector('.inner-cart-box');
    const emptyEl = document.createElement('p');
    emptyEl.textContent = 'Your cart is empty.'
    if(Cart.cart.length === 0){
        innerCartBox.appendChild(emptyEl)
        return emptyEl;
    }else {
        Cart.cart.forEach((item) => {
            console.log(Cart.cart)
            insertCartCard(item)
        });   
    }   
}

const resetCheckoutItems = () => {
    const innerCartBox = document.querySelector('.inner-cart-box');
    console.log(innerCartBox.firstElementChild)
    while(innerCartBox.firstElementChild){
        innerCartBox.removeChild(innerCartBox.firstElementChild)
    }
    displayCard();
}

resetCheckoutItems();

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

// Checkout cart click event
const displayCheckout = () => {    
    const checkoutFn = () => {
        const bgCartBox = document.querySelector('.bg-cart-box');
        bgCartBox.classList.remove('checkout-cart-active');
        bgCartBox.removeEventListener('click', checkoutFn);
    }

    const bgCartBox = document.querySelector('.bg-cart-box');
    bgCartBox.classList.add('checkout-cart-active');
    bgCartBox.addEventListener('click', checkoutFn);
}
const checkoutCart = document.querySelector('.checkout-cart');
checkoutCart.addEventListener('click', displayCheckout);


// Add to cart event
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const countIncrement = () => {
    const cartQtyCount = document.querySelector('.cartQtyCount');
    const cartCount = document.querySelector('.cart-count');
    cartQtyCount.textContent = Number(cartQtyCount.textContent) + 1;
    cartCount.textContent = Number(cartCount.textContent) + 1
} 

const countDecrement = () => {
    const cartQtyCount = document.querySelector('.cartQtyCount');
    const cartCount = document.querySelector('.cart-count');
    if(Number(cartQtyCount.textContent) > 0){
        cartQtyCount.textContent = Number(cartQtyCount.textContent) - 1;
        cartCount.textContent = Number(cartCount.textContent) - 1;       
    }else {
        return;
    }
} 

const alreadyInCart = (msg) => {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.lastElementChild.textContent = msg;
}

addToCartBtn.addEventListener('click', () => {
    const isAdded = Cart.addToCart(product);   
    if(isAdded){
        countIncrement();
        incrementQty(product)
        resetCheckoutItems();
        alreadyInCart('Already in cart');
    }else {
        alreadyInCart('Already in cart');
    }    
})

// Increase or decrease qty event
const incrementQty = (product) => {    
      product.qty +=1;    
}

const decrementQty = (product) => {
    if(product.qty > 0){
        product.qty -= 1;        
    }else {
        return;
    }
      
}


plusIconEl.addEventListener('click', () => {
    const isAdded = Cart.addToCart(product);
    if(isAdded){
        alreadyInCart('Already in cart')
        countIncrement();
        incrementQty(product);
        resetCheckoutItems();
    }else {
        alreadyInCart('Already in cart')
        countIncrement();
        incrementQty(product);    
        resetCheckoutItems();
    }    
});

minusIconEl.addEventListener('click', () => {    
    countDecrement();
    decrementQty(product);
    resetCheckoutItems();
    console.log(Cart.cart)
    if(product.qty < 1){
        alreadyInCart('Add to cart')
    }
    if(product.qty < 2){
        Cart.removeProduct(product);      
    }
})




const deleteProductIcon = document.querySelector('.product-delete'); 