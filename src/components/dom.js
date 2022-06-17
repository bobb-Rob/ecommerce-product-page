import '../css/sidebar.css';
import closeIcon from '../images/icon-close.svg';
import productThumnail from '../images/image-product-1-thumbnail.jpg'
import deleteIcon from '../images/icon-delete.svg'



const insertCloseIcon = (location) => {
    const img = document.createElement('img');
    img.src = closeIcon;   
    location.appendChild(img);
    return img;
}


const product =  {
    productThumnail: productThumnail,
    productName: 'Autumn Limited Edition...',
    qty: 3,
    price: '125',
}

const insertCartCard = ({productThumnail, productName, qty, price}) => {
    // const emptyEl = document.createElement('p');
    // emptyEl.textContent = 'Your cart is empty.'
    // if(cart.length === 0){
    //     return emptyEl;
    // }else {
    //     const cartCard = createCartCard();
    //     return cartCard;
    // }   
    const cartCard = `
    <div class="cart-card">
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
                    <strong>$375.00</strong>
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
}

insertCartCard(product)


export { insertCloseIcon, insertCartCard }