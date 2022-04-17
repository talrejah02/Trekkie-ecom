import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { usePrivateproducts } from '../../context/PrivateProductsContext'
import "../../pages/Cart-page/Cart.css"
import {cartInitialprice} from "../../utils/CartPrice"

function CartTotal() {
  const {state}=usePrivateproducts()  
  const {cart}=state


  const [cartValue,setCartvalue]=useState({
    orignalPrice:0,
    discount:0,
    deliveryCharge:150,
    TotalAmount:0,
  })
  
  useEffect(()=>{
    if(state.cart.lenght>=1){
      const initialPrice = cartInitialprice(cart)
      const discountPrice = cartDiscountprice(cart)
      const totalPrice = cartTotalprice(cart)
      console.log(initialPrice,discountPrice,totalPrice)
    }
    console.log(cart)
  },[cart])

  const{
    orignalPrice,
    discount,
    deliveryCharge,
    TotalAmount
  }=cartValue

  return (
    <section className="cart-price-container">
    <section className="cart-price-details">
      <section className="price-group">
        <span className="group-head">PRICE DETAILS</span>
      </section>
      <hr />
      <section className="price-group">
        <span className="group-subhead">Price</span>
        <span className="group-subhead-price">₹{orignalPrice}</span>
      </section>
      <section className="price-group">
        <span className="group-subhead">Discount</span>
        <span className="group-subhead-price">-₹{discount}</span>
      </section>
      <section className="price-group">
        <span className="group-subhead">Delivery charges</span>
        <span className="group-subhead-price">₹{deliveryCharge}</span>
      </section>
      <hr />
      <section className="price-group">
        <span className="group-subhead bold">TOTAL AMOUNT</span>
        <span className="group-subhead-price bold">₹{TotalAmount}</span>
      </section>
      <hr />
      <section className="discount-info">
        You will save ₹{discount} on this order
      </section>
      <section className="cart-checkout">
        <button className="cart-btn">Place Order</button>
      </section>
    </section>
  </section>
  )
}

export {CartTotal}