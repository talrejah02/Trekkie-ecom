import React from 'react'
import {ProductCard} from "../../components/ProductCard/ProductCard"

function Wishlist() {
  return (
    <div>
        <section class="page-header">MY WISHLIST</section>
        <section class="card-container">
            <ProductCard/>
        </section>
    </div>
  ) 
}

export {Wishlist}