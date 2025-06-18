
import { useEffect, useState } from 'react';
import './css/cart.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Cart({ cart = [], setcart }) {
    const [total, setTotal] = useState(0);

useEffect(() => {
    const calculatedTotal = cart.reduce((acc, curr) => {
        const price = parseFloat(curr.price) || 0;
        const quantity = curr.quantity || 1;
        return acc + price * quantity;
    }, 0);
    setTotal(calculatedTotal);
}, [cart]);


    const removeCartItem = (id) => {
        const updatedCart = cart.filter(c => c.id !== id);
        setcart(updatedCart);
    };
    const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setcart(updatedCart);
};

const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
        item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
    );
    setcart(updatedCart);
};


    return (
        <>
        <Nav/>
            {cart.length === 0 ? (
                <p className='empty-cart-msg'>Your cart is empty.</p>
            ) : (
                cart.map((product) => (
                    <div className='cart-cont'>
                    <div className="cart" key={product.id}>
                        <div className="cart-product">
                            <img src={product.img} alt={product.name} height="100px" width="100px" className='pro-img' />
                        </div>
                        <div className="cart-product-details">
                            <h3 className="cart-product-name">{product.name}</h3>
                            <p className="cart-product-price">Price: ₹{product.price}</p>
                        </div>
                        <div className="cart-product-quantity">
                            <button className="qty-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                            <span>{product.quantity}</span>
                            <button className="qty-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                            <button className='remove-btn' onClick={() => removeCartItem(product.id)}>Remove</button>
        </div>
                    </div>
                    </div>
                ))
            )}
            <p>Total Amount: ₹{total.toFixed(2)}</p>
            <center>
                 <Link to='/checkout' >
            <button className='check-btn' disabled={cart.length === 0 } >Checkout</button>
            </Link>
            </center>
           
        </>
    );
}

export default Cart;
