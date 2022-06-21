import {
  insertCloseIcon,
  insertCartCard,
  displaySlideCard,
  insertThumbnailEl,
  createPopupBg,
  createNextIcon,
  createPrevIcon,
} from './components/dom.js';
import { product, imagesArr, thumbnailsArr } from './components/product.js';
import './css/index.css';
import './css/slideshow.css';
import './css/headline.css';
import './css/cart.css';
import avatarImg from './images/image-avatar.png';
import plusIcon from './images/icon-plus.svg';
import minusIcon from './images/icon-minus.svg';
import logo from './images/logo.svg';
import Cart from './components/cart.js';

const avatar = document.querySelector('.avatar');
const plusIconEl = document.querySelector('.plus-icon');
const minusIconEl = document.querySelector('.minus-icon');
const logoEl = document.querySelector('.logo');

logoEl.src = logo;
avatar.src = avatarImg;
plusIconEl.src = plusIcon;
minusIconEl.src = minusIcon;

// display cart items
const updateCartCounts = (cart) => {
  const cartCount = document.querySelector('.cart-count');
  let count = 0;
  cart.forEach((item) => {
    count += item.qty;
  });
  cartCount.textContent = count;
};

const displayCard = () => {
  const innerCartBox = document.querySelector('.inner-cart-box');
  const emptyEl = document.createElement('p');
  emptyEl.className = 'empty-message';
  emptyEl.textContent = 'Your cart is empty.';
  if (Cart.cart.length === 0) {
    innerCartBox.appendChild(emptyEl);
    // return emptyEl;
  }
  Cart.cart.forEach((item) => {
    insertCartCard(item);
  });

  updateCartCounts(Cart.cart);
};

const resetCheckoutItems = () => {
  const innerCartBox = document.querySelector('.inner-cart-box');
  while (innerCartBox.firstElementChild) {
    innerCartBox.removeChild(innerCartBox.firstElementChild);
  }
  displayCard();
};

resetCheckoutItems();

// Menu onclick
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  const menuEl = document.querySelector('.menu-container');
  const closeEl = insertCloseIcon(menuEl);
  closeEl.classList.add('close');

  document.querySelector('.menu-container').style.width = '85%';
  document.querySelector('.menu-container').style.padding = '3rem 2rem';

  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.menu-container').style.width = '';
    document.querySelector('.menu-container').style.padding = '';
    closeEl.remove();
  });
});

// Checkout cart click event

const executeCheckoutCloseEvent = () => {
  const bgCartBox = document.querySelector('.bg-cart-box');
  const checkoutFn = (e) => {
    if (e.target === bgCartBox) {
      bgCartBox.classList.remove('checkout-cart-active');
      bgCartBox.removeEventListener('click', checkoutFn);
    }
  };
  bgCartBox.addEventListener('click', checkoutFn);
};

const displayCheckout = () => {
  const bgCartBox = document.querySelector('.bg-cart-box');
  bgCartBox.classList.add('checkout-cart-active');
  executeCheckoutCloseEvent();
};

const checkoutCart = document.querySelector('.checkout-cart');
checkoutCart.addEventListener('click', displayCheckout);

// Add to cart event
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const productCountIncrement = () => {
  const productQtyCount = document.querySelector('.productQtyCount');

  productQtyCount.textContent = Number(productQtyCount.textContent) + 1;
};

const productCountDecrement = () => {
  const productQtyCount = document.querySelector('.productQtyCount');
  // const cartCount = document.querySelector('.cart-count');
  if (Number(productQtyCount.textContent) > 0) {
    productQtyCount.textContent = Number(productQtyCount.textContent) - 1;
  }
};

const alreadyInCart = (msg) => {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  addToCartBtn.lastElementChild.textContent = msg;
};

const attachDeleteEvent = () => {
  const deleteProductIcon = Array.from(document.querySelectorAll('.product-delete'));
  if (deleteProductIcon.length) {
    deleteProductIcon.forEach((item) => {
      item.addEventListener('click', () => {
        Cart.removeProduct(product);
        product.qty = 0;
        resetCheckoutItems();
        alreadyInCart('Add to cart');
        attachDeleteEvent();
        const productQtyCount = document.querySelector('.productQtyCount');
        productQtyCount.textContent = 0;
        updateCartCounts(Cart.cart);
      });
    });
  }
};

addToCartBtn.addEventListener('click', () => {
  const isAdded = Cart.addToCart(product);
  if (isAdded) {
    productCountIncrement();
    resetCheckoutItems();
    alreadyInCart('Already in cart');
    attachDeleteEvent();
  } else {
    alreadyInCart('Already in cart');
  }
});

// Increase or decrease qty event
const productQtyIncrement = (cart, product) => {
  cart.forEach((item) => {
    if (item.id === product.id) {
      item.qty += 1;
    }
  });
};

const productQtyDecrement = (cart, product) => {
  if (product.qty > 0) {
    cart.forEach((item) => {
      if (item.id === product.id) {
        item.qty -= 1;
      }
    });
  }
};

plusIconEl.addEventListener('click', () => {
  const isAdded = Cart.addToCart(product);
  if (isAdded) {
    alreadyInCart('Already in cart');
    productCountIncrement();
    resetCheckoutItems();
    attachDeleteEvent();
  } else {
    alreadyInCart('Already in cart');
    productCountIncrement();
    productQtyIncrement(Cart.cart, product);
    resetCheckoutItems();
    attachDeleteEvent();
  }
});

minusIconEl.addEventListener('click', () => {
  productCountDecrement();
  productQtyDecrement(Cart.cart, product); // update qty in cart
  resetCheckoutItems();

  let productQty = 0;
  Cart.cart.forEach((item) => {
    if (item.id === product.id) {
      productQty = item.qty;
    }
  });
  if (productQty < 1) {
    alreadyInCart('Add to cart');
  }
  if (productQty < 2) {
    productQtyDecrement(Cart.cart, product);
    Cart.removeProduct(product);
  }
});

// Slide show event

const slideshow = () => {
  const slideshowContainer = document.querySelector('.slideshow-container');
  const slideClassName = 'myslide';

  displaySlideCard(slideshowContainer, slideClassName, imagesArr); // Display slide initial show
  createNextIcon(slideshowContainer, 'circle-next');
  createPrevIcon(slideshowContainer, 'circle-prev');

  let slideIndex = 1;
  const showSlider = (n, classNam) => {
    let i;
    const slides = document.getElementsByClassName(classNam);

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  };

  showSlider(slideIndex, slideClassName);

  const plusSlides = (n, classNam) => {
    showSlider(slideIndex += n, classNam);
  };

  function currentSlide(n, classNam) {
    showSlider(slideIndex = n, classNam);
  }

  const prev = document.querySelector('.circle-prev');
  const next = document.querySelector('.circle-next');

  const previousImage = () => plusSlides(-1, slideClassName);
  prev.addEventListener('click', previousImage);

  const nextImage = () => plusSlides(1, slideClassName);
  next.addEventListener('click', nextImage);

  // Thumbnails image event
  const thumbnailContainer = document.querySelector('.thumbnail-container');
  insertThumbnailEl(thumbnailContainer, thumbnailsArr);

  thumbnailContainer.addEventListener('click', (e) => {
    if (e.target.id === 'thumb-1') {
      currentSlide(1, slideClassName);
    }
    if (e.target.id === 'thumb-2') {
      currentSlide(2, slideClassName);
    }
    if (e.target.id === 'thumb-3') {
      currentSlide(3, slideClassName);
    }
    if (e.target.id === 'thumb-4') {
      currentSlide(4, slideClassName);
    }
  });

  const resetShadeBgColor = () => {
    const { children } = thumbnailContainer;
    for (let i = 0; i < children.length; i += 1) {
      children[i].firstElementChild.classList.remove('faded-thumbnail-bg-focus');
    }
  };

  const resetPopupShadeBgColor = () => {
    const { children } = document.querySelector('.pop-thumbnail');
    for (let i = 0; i < children.length; i += 1) {
      children[i].firstElementChild.classList.remove('faded-thumbnail-bg-focus');
    }
  };

  thumbnailContainer.addEventListener('focusin', (e) => {
    if (e.target.id === 'thumb-1') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
    if (e.target.id === 'thumb-2') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
    if (e.target.id === 'thumb-3') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
    if (e.target.id === 'thumb-4') {
      resetShadeBgColor();
      e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
    }
  });
  thumbnailContainer.firstElementChild.focus();

  //   popup image click display event
  const popupSlideClassName = 'inner-slide';

  const popupPreviousImage = () => plusSlides(-1, popupSlideClassName);

  const popupNextImage = () => plusSlides(1, popupSlideClassName);

  slideshowContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('img-courosal') && window.innerWidth > 375) {
      createPopupBg();
      const popupSlideBg = document.querySelector('.slide-pop-bg');
      displaySlideCard(popupSlideBg, popupSlideClassName, imagesArr);

      createNextIcon(popupSlideBg, 'popup-circle-next');
      createPrevIcon(popupSlideBg, 'popup-circle-prev');

      showSlider(slideIndex, popupSlideClassName); // effect slideshow event

      // Effect popup next and prev click event
      const popupPrev = document.querySelector('.popup-circle-prev');
      const popupNext = document.querySelector('.popup-circle-next');
      popupPrev.addEventListener('click', popupPreviousImage);
      popupNext.addEventListener('click', popupNextImage);

      // effect the event item for popup thumbnails
      const popThumbnail = document.querySelector('.pop-thumbnail');
      insertThumbnailEl(popThumbnail, thumbnailsArr, 10);

      popThumbnail.addEventListener('click', (e) => {
        if (e.target.id === 'thumb-11') {
          currentSlide(1, popupSlideClassName);
        }
        if (e.target.id === 'thumb-12') {
          currentSlide(2, popupSlideClassName);
        }
        if (e.target.id === 'thumb-13') {
          currentSlide(3, popupSlideClassName);
        }
        if (e.target.id === 'thumb-14') {
          currentSlide(4, popupSlideClassName);
        }
      });

      popThumbnail.addEventListener('focusin', (e) => {
        if (e.target.id === 'thumb-11') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
        if (e.target.id === 'thumb-12') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
        if (e.target.id === 'thumb-13') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
        if (e.target.id === 'thumb-14') {
          resetPopupShadeBgColor();
          e.target.firstElementChild.classList.add('faded-thumbnail-bg-focus');
        }
      });

      popThumbnail.firstElementChild.focus();
      // Insert close icon
      const closeEll = insertCloseIcon(popupSlideBg);
      closeEll.classList.add('pop-close');
      popupSlideBg.classList.add('checkout-cart-active');

      closeEll.addEventListener('click', () => {
        popupSlideBg.classList.toggle('checkout-cart-active');
        thumbnailContainer.firstElementChild.focus();
        popupSlideBg.remove();
      });
    }
  });
};

slideshow();
