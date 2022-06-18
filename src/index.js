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
    emptyEl.className = 'empty-message'
    emptyEl.textContent = 'Your cart is empty.'
    if(Cart.cart.length === 0){
        innerCartBox.appendChild(emptyEl)
        return emptyEl;
    }else {
        Cart.cart.forEach((item) => {          
            insertCartCard(item)
        });   
    }
    updateCartCounts(Cart.cart)  
}


const updateCartCounts = (cart) => {
    // const productQtyCount = document.querySelector('.productQtyCount');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    cart.forEach((item) => {
        count = count + item.qty;
    });
    // productQtyCount.textContent = count;
    cartCount.textContent = count;
}

const updateProductCount = (cart, product) => {
    const productQtyCount = document.querySelector('.productQtyCount');
    let count = 0;
    cart.forEach((item) => {
        if(item.id === product.id){
            count = item.qty;
        }      
    });
    productQtyCount.textContent = 0;    
}

const resetCheckoutItems = () => {
    const innerCartBox = document.querySelector('.inner-cart-box');   
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
const displayCheckout = (e) => {    
    const bgCartBox = document.querySelector('.bg-cart-box');
    bgCartBox.classList.add('checkout-cart-active');   
    executeCheckoutCloseEvent()
}

const executeCheckoutCloseEvent = () => {
    const bgCartBox = document.querySelector('.bg-cart-box');
    const checkoutFn = (e) => {               
        if(e.target === bgCartBox){
            bgCartBox.classList.remove('checkout-cart-active');
            bgCartBox.removeEventListener('click', checkoutFn);
        }       
    }
    bgCartBox.addEventListener('click', checkoutFn);  
}

const checkoutCart = document.querySelector('.checkout-cart');
checkoutCart.addEventListener('click', displayCheckout);


// Add to cart event
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const productCountIncrement = () => {
    const productQtyCount = document.querySelector('.productQtyCount');
    // const cartCount = document.querySelector('.cart-count');
    productQtyCount.textContent = Number(productQtyCount.textContent) + 1;
    // cartCount.textContent = Number(cartCount.textContent) + 1
} 

const productCountDecrement = () => {
    const productQtyCount = document.querySelector('.productQtyCount');
    // const cartCount = document.querySelector('.cart-count');
    if(Number(productQtyCount.textContent) > 0){
        productQtyCount.textContent = Number(productQtyCount.textContent) - 1;
        // cartCount.textContent = Number(cartCount.textContent) - 1;       
    }else {
        return;
    }
} 

// const resetUICount = () => {
//     const productQtyCount = document.querySelector('.productQtyCount');
//     const cartCount = document.querySelector('.cart-count');    
//     productQtyCount.textContent = 0;
//     cartCount.textContent = 0;   
// }

const alreadyInCart = (msg) => {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.lastElementChild.textContent = msg;
}

addToCartBtn.addEventListener('click', () => {
    const isAdded = Cart.addToCart(product);   
    if(isAdded){
        productCountIncrement();         
        resetCheckoutItems();
        alreadyInCart('Already in cart');
        attachDeleteEvent();
    }else {
        alreadyInCart('Already in cart');
    }    
})

// Increase or decrease qty event
const productQtyIncrement = (cart, product) => {
    cart.forEach((item) => {
        if(item.id === product.id){
            item.qty +=1;
        }
    });        
}

const productQtyDecrement = (cart, product) => {
    if(product.qty > 0){
        cart.forEach((item) => {
            if(item.id === product.id){
                item.qty -=1;
                console.log('increased from productQtyFn')
            }
        });           
    }
}


plusIconEl.addEventListener('click', () => {
    const isAdded = Cart.addToCart(product);
    if(isAdded){
        alreadyInCart('Already in cart')
        productCountIncrement();        
        resetCheckoutItems();
        attachDeleteEvent();
        console.log(Cart.cart)
    }else {
        alreadyInCart('Already in cart')
        productCountIncrement();
        productQtyIncrement(Cart.cart, product);    
        resetCheckoutItems();
        attachDeleteEvent();
        console.log('qty updated in falses')
        console.log(Cart.cart)
    }    
});

minusIconEl.addEventListener('click', () => {    
    productCountDecrement();
    productQtyDecrement(Cart.cart, product); //update qty in cart
    resetCheckoutItems();
    console.log(Cart.cart);

    let productQty = 0;    
    Cart.cart.forEach((item) => {
        if(item.id === product.id){
            productQty = item.qty;
        }
    });
    if(productQty < 1){
        alreadyInCart('Add to cart')
    }
    if(productQty < 2){
        productQtyDecrement(Cart.cart, product); 
        Cart.removeProduct(product);
        // resetCheckoutItems();    
    }
})

// remove product from the cart
const attachDeleteEvent = () => {
    const deleteProductIcon = Array.from(document.querySelectorAll('.product-delete'));   
    if(deleteProductIcon.length) {       
        deleteProductIcon.forEach((item) => {
        item.addEventListener('click', () => {
                Cart.removeProduct(product);
                product.qty = 0;                            
                resetCheckoutItems();
                alreadyInCart('Add to cart');
                attachDeleteEvent();
                const productQtyCount = document.querySelector('.productQtyCount');   
                productQtyCount.textContent = 0;    
               
            })
        })       
    }else {
        console.log('no delete btn')
    } 
}

// SLide show event


