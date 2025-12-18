import React from 'react'
import Wish from '../../components/Wish/Wish';
import './Cart.scss'
import WishList from '../WishList/WishList';

function Cart() {
  return (
    <div className="Cart">
      <div className="cartContainer">
      <div className="CartTop">
        <h1>Shopping Bag</h1>
        <p>Subtotal : 0.00</p>
      </div>
      <div className="cartNav">
        <h2>Shopping Bag (0)</h2>
        <h2>Wishlist (0)</h2>
      </div>
      <div className="cartList">
        {/* cart is empty */}
        <p>You have 0 items in your cart or</p> <br />
        <Wish/> <br />
        <Wish/> <br />
        <Wish/>
        <div className='btncontainer'>
          <button className='hoverLink shoppingbtn'>Continue Shopping</button>
        </div>
      </div>
      </div>
      <div className="paymentOption">
        <p>shubhamUpi</p>
      </div>

    </div>
  )
}

export default Cart