import React from 'react';
import './Cart.css'

const Cart = props => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    total = total.toFixed(2)
    total = Number(total);
    let shipping = 0;
    if (total === 0) {
        shipping = 0;
    }
    else if (total > 999) {
        shipping = 0;
    }
    else if (total > 499) {
        shipping = 2.44;
    }
    else if (total > 399) {
        shipping = 4.55;
    }
    else if (total > 299) {
        shipping = 6.55;
    }
    else if (total > 199) {
        shipping = 7.55;
    }
    else if (total > 100) {
        shipping = 8.55;
    }

    else if (total <= 100) {
        shipping = 9.55;
    }


    let tax = (total / 20).toFixed(2);
    let grandTotal = (total + shipping + Number(tax)).toFixed(2)


    return (
        <div className="cart-container">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <strong>Total Price: {grandTotal}</strong>
        </div>
    );
};

export default Cart;