
class Cart {
    static cart = [];

    static addToCart = (product) => {
        const index = Cart.cart.findIndex((prod) => product.id === prod.id);
        console.log(index);
        if(index === -1){
            Cart.cart = [...Cart.cart, product];            
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