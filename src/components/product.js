import uniqid from 'uniqid';
import image1Thumnail from '../images/image-product-1-thumbnail.jpg';
import productImage1 from '../images/image-product-1.jpg';
import image2Thumnail from '../images/image-product-2-thumbnail.jpg';
import productImage2 from '../images/image-product-2.jpg';
import image3Thumnail from '../images/image-product-3-thumbnail.jpg';
import productImage3 from '../images/image-product-3.jpg';
import image4Thumnail from '../images/image-product-4-thumbnail.jpg';
import productImage4 from '../images/image-product-4.jpg';

const product = {
  images: {
    image1: {
      image: productImage1,
      imageThumnail: image1Thumnail,
    },
    image2: {
      image: productImage2,
      imageThumnail: image2Thumnail,
    },
    image3: {
      image: productImage3,
      imageThumnail: image3Thumnail,
    },
    image4: {
      image: productImage4,
      imageThumnail: image4Thumnail,
    },

  },
  productName: 'Autumn Limited Edition...',
  qty: 0,
  price: 125,
  id: uniqid(),
};

const imagesArr = [productImage1, productImage2, productImage3, productImage4];
const thumbnailsArr = [image4Thumnail, image3Thumnail, image2Thumnail, image1Thumnail];

export { product, imagesArr, thumbnailsArr };