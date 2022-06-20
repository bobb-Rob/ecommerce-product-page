import uniqid from 'uniqid';
import '../css/sidebar.css';
import closeIcon from '../images/icon-close.svg';
import deleteIcon from '../images/icon-delete.svg'



const insertCloseIcon = (location) => {
    const img = document.createElement('img');
    img.src = closeIcon;   
    location.appendChild(img);
    return img;
}

const insertCartCard = ({images, productName, qty, price, id}) => {
    const productThumnail = images.image1.imageThumnail;  
    
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


const slideCard = (image, location, classNam) => {
  const slides = 
  `<div class="${classNam} fade">
    <img class="img-courosal" src="${image}" alt="img-courosal">
  </div>`     
  location.insertAdjacentHTML('afterbegin', slides)
}


const displaySlideCard = (location, classNam, imageArr) => {  
  imageArr.forEach((image) => {
    slideCard(image, location, classNam );
  });  
}

const createPrevIcon = (location, classNam) => {
  location.insertAdjacentHTML('beforeend',
  `<div class="circle ${classNam}">
        <a class="prev">&#10094;</a>
   </div>
   `)
      
}

const createNextIcon = (location, classNam) => { 
  location.insertAdjacentHTML('beforeend',
     ` <div class="circle ${classNam}">
        <a class="next">&#10095;</a>
      </div>`);
}

const createThumbnailEl = (image, id) => {
  const slides = document.createElement('div');
  slides.classList.add('myThumbnails');    
  slides.innerHTML = `<img src="${image}" id="${id}" alt='product-thumbnail' >`;
  return slides;
}


const insertThumbnailEl = (location, thumbnailsArr, id = 0) => { 
  thumbnailsArr.forEach((item, index) => {
    location.appendChild(createThumbnailEl(item, index + 1 + id))
  });
}


const createPopupBg = () => {
  const popupModal = `
      <div class="slide-pop-bg">            

        <div class="pop-thumbnail">
  
        </div>
    </div>`;
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.insertAdjacentHTML('beforebegin', popupModal);
}



export { insertCloseIcon,
         insertCartCard, 
         displaySlideCard, 
         insertThumbnailEl, 
         createPopupBg, 
         createNextIcon, 
         createPrevIcon 
        }