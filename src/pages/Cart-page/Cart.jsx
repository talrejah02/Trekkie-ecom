import React from 'react'
import { CartitemCard } from '../../components/index'
import "./Cart.css"
function Cart() {
  return (
    <div>
    <section className="page-header">MY CART</section>
    <section className="cart-wrapper">
        <section className="cart-item-container">
           <CartitemCard/>
        </section>
        <section className="cart-price-container">
            <section className="cart-price-details">
                <section className="price-group">
                    <span className="group-head">PRICE DETAILS</span>
                </section>
                <hr/>
                <section className="price-group">
                    <span className="group-subhead">Price</span>
                    <span className="group-subhead-price">₹499</span>
                </section>
                <section className="price-group">
                    <span className="group-subhead">Discount</span>
                    <span className="group-subhead-price">-₹199</span>
                </section>
                <section className="price-group">
                    <span className="group-subhead">Delivery charges</span>
                    <span className="group-subhead-price">₹99</span>
                </section>
                <hr/>
                <section className="price-group">
                    <span className="group-subhead bold">TOTAL AMOUNT</span>
                    <span className="group-subhead-price bold">₹399</span>
                </section>
                <hr/>
                <section className="discount-info">You will save ₹199 on this order</section>
                <section className="cart-checkout">
                    <button className="cart-btn">Place Order</button>
                </section>
            </section>


        </section>
    </section>
    </div>
  )
}

export  {Cart}