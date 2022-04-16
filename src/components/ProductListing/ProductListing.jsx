import React from 'react'
import { usePrivateproducts } from '../../context/PrivateProductsContext'
import { useProducts } from '../../context/ProductsContext'
import { ProductCard } from '../index'
import "./ProductListing.css"

function ProductListing({products}) {

  const {state} = usePrivateproducts()
  const {wishlist,cart}=state 
    
   
  return (
    <section className="card-container">
      {
        products.map((products)=>{ 
          if(cart.length>0||wishlist.length>0){
            if(cart.find((cartItem)=>cartItem._id === products._id)){
              if(wishlist.find((wishlistItem)=>wishlistItem._id === products._id)){
                return <ProductCard item={products} wishlistStatus={true} cartStatus={true} />
              }else{
                return <ProductCard item={products} wishlistStatus={false} cartStatus={true} />
              }
            }else if(wishlist.find((wishlistItem)=>wishlistItem._id === products._id)){
              return <ProductCard item={products} wishlistStatus={true} cartStatus={false} />
            }

          }return<ProductCard item={products} wishlistStatus={false} cartStatus={false} />
        })  
      } 
    </section>
  )
}

export {ProductListing}