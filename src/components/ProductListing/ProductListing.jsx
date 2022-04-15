import React from 'react'
import { useProducts } from '../../context/ProductsContext'
import { ProductCard } from '../index'
import "./ProductListing.css"

function ProductListing() {
  const{products}=useProducts()
   
  return (
    <section className="card-container">
      {
        products.map((item)=><ProductCard item={item} />)  
      }
        
    </section>
  )
}

export {ProductListing}