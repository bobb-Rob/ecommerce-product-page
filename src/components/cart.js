import { product } from "./dom.js";
import uniqid from 'uniqid'

class Cart {
    static cart = [
         {
        images: {
          image1: {
            image: '',
            imageThumnail: ''
          },
          image2: {
            image: '',
            imageThumnail: ''
          },
          image3: {
            image: '',
            imageThumnail: ''
          },
          image4: {
            image: '',
            imageThumnail: ''
          },
    
        },   
        productName: 'Capri Limited Edition...',
        qty: 4,
        price: 125,
        id: uniqid(),
    }
];

    static updateQty = (product) => {
        // let newProduct =  Object.assign({}, product); //Update qty by adding one
        // console.log(newProduct)
        product.qty += 1;
        return product;
    }

    static addToCart = (product) => {
        const index = Cart.cart.findIndex((prod) => product.id === prod.id);     
        if(index === -1){           
            Cart.cart = [...Cart.cart, Cart.updateQty(product)];
            console.log(Cart.cart);
            return true;
        } else {                     
            return false;
        }        
    }

    static removeProduct = (product) => {
        Cart.cart = Cart.cart.filter((prod) => prod.id !== product.id);        
    }
}

export default Cart;