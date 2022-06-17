import uniqid from 'uniqid';
import Cart from './cart';
import '../css/sidebar.css';
import closeIcon from '../images/icon-close.svg';
import image1Thumnail from '../images/image-product-1-thumbnail.jpg'
import productImage1 from '../images/image-product-1.jpg'
import image2Thumnail from '../images/image-product-2-thumbnail.jpg'
import productImage2 from '../images/image-product-2.jpg'
import image3Thumnail from '../images/image-product-3-thumbnail.jpg'
import productImage3 from '../images/image-product-3.jpg'
import image4Thumnail from '../images/image-product-4-thumbnail.jpg'
import productImage4 from '../images/image-product-4.jpg'
import deleteIcon from '../images/icon-delete.svg'



const insertCloseIcon = (location) => {
    const img = document.createElement('img');
    img.src = closeIcon;   
    location.appendChild(img);
    return img;
}


const product =  {
    images: {
      image1: {
        image: productImage1,
        imageThumnail: image1Thumnail
      },
      image2: {
        image: productImage2,
        imageThumnail: image2Thumnail
      },
      image3: {
        image: productImage3,
        imageThumnail: image3Thumnail
      },
      image4: {
        image: productImage4,
        imageThumnail: image4Thumnail
      },

    },   
    productName: 'Autumn Limited Edition...',
    qty: 0,
    price: 125,
    id: uniqid(),
}

const insertCartCard = ({images, productName, qty, price, id}) => {
    const productThumnail = images.image1.imageThumnail;
    console.log(productThumnail)
    
    const cartCard = `
    <div class="cart-card" id="${id}">
    <div class="card-detail">
     <div>
        <img class="product-thumbnail" src="${productThumnail}" alt="product-thumbnail">
        <div>
            <span class="product-name">${productName}</span>
            <div>
                <span class="product-amount">$${price}</span>
                <span>x</span>
                <span class="product-qty">${qty}</span>
                <span>=</span>
                <span class="product-total">
                    <strong>$${qty * price}</strong>
                </span>
            </div>
        </div>
      </div>
      <div class='product-delete-wrapper'>
        <img class="product-delete" src="${deleteIcon}" alt="delete-icon">
      </div>
      </div>         
  </div>`

  const innerCartBox = document.querySelector('.inner-cart-box');
  innerCartBox.insertAdjacentHTML('beforeend', cartCard)
};

export { insertCloseIcon, insertCartCard, product }