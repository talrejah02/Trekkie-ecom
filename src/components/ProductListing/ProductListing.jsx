import React from 'react'
import { ProductCard } from '../index'
import "./ProductListing.css"

function ProductListing() {
  return (
    <section class="card-container">
           <ProductCard/>
        </section>
  )
}

export {ProductListing}