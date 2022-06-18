import uniqid from 'uniqid';
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


  // Slideshow
  const desktopSlideshow = (() => {
    const imagesArr = [productImage1, productImage2, productImage3, productImage4 ];
    const thumbnailsArr = [image4Thumnail, image3Thumnail, image2Thumnail, image1Thumnail ];

    const slideCard = (image) => {
      const slides = 
      `<div class="myslide fade">
        <img class="img-courosal" src="${image}" alt="img-courosal">
      </div>`
      const slideshowContainer = document.querySelector('.slideshow-container');
      slideshowContainer.insertAdjacentHTML('afterbegin', slides)
    }
         
    imagesArr.forEach((item) => {
      slideCard(item);
    });
  
    const showSlider = (n) => {
      let i;
      let slides = document.getElementsByClassName("myslide");
      if (n > slides.length) {
        slideIndex = 1
      }
  
      if (n < 1) {
        slideIndex = slides.length;      
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[slideIndex-1].style.display = "block";
    }     
  
    let slideIndex = 1;
    showSlider(slideIndex);
  
    const plusSlides = (n) => {
      console.log('clicked')
      showSlider(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlider(slideIndex = n);
    }
      
    const prev = document.querySelector('.circle-prev');
    const next = document.querySelector('.circle-next');
  
    prev.addEventListener('click', () => {
      plusSlides(-1)
    });
  
    next.addEventListener('click', () => {
      plusSlides(1)
    });
  

    const slidesEl = (image, id) => {
      const slides = document.createElement('div');
      slides.classList.add('myThumbnails');    
      slides.innerHTML = `<img src="${image}" id="${id}" alt='product-thumbnail' >`;
      return slides;
    }

    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailsArr.forEach((item, index) => {
      thumbnailContainer.appendChild(slidesEl(item, index + 1))
    });

    thumbnailContainer.addEventListener('click', (e) => {
      console.log(e.target)
        if(e.target.id === '1'){
          currentSlide(1);
        }
        if(e.target.id === '2'){
          currentSlide(2);
        }
        if(e.target.id === '3'){
          currentSlide(3);
        }
        if(e.target.id === '4'){
          currentSlide(4);
        }       
      });

      const slideshowContainer = document.querySelector('.slideshow-container');
      slideshowContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('img-courosal')){
          console.log('pop the modal')
        }
      })





    return { }
  })();



export { insertCloseIcon, insertCartCard, product }