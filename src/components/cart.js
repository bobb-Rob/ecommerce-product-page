class Cart {
    static cart = [

    ];

    static updateQty = (product) => {
      // let newProduct =  Object.assign({}, product); //Update qty by adding one
      // console.log(newProduct)
      product.qty += 1;
      return product;
    }

    static addToCart = (product) => {
      const index = Cart.cart.findIndex((prod) => product.id === prod.id);
      if (index === -1) {
        Cart.cart = [...Cart.cart, Cart.updateQty(product)];
        return true;
      }
      return false;
    }

    static removeProduct = (product) => {
      Cart.cart = Cart.cart.filter((prod) => prod.id !== product.id);
    }
}

export default Cart;