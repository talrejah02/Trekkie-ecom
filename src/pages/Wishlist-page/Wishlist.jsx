import React from 'react'
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { usePrivateproducts } from '../../context/PrivateProductsContext'
import { useProducts } from '../../context/ProductsContext'

function Wishlist() {

  const { state } = usePrivateproducts()
  const { wishlist, cart } = state
  return (
    <div>
      <section class="page-header">{wishlist.length == 0 ? "YOU HAVE NO ITEM IN YOUR WISHLIST" : "MY WISHLIST"}</section>
      <section class="card-container">
        {
          wishlist.map((item) => {
            if (cart.find((cartItem) => cartItem._id === item._id)) {
              return <ProductCard item={item} wishlistStatus={true} cartStatus={true} />
            } else { return <ProductCard item={item} wishlistStatus={true} cartStatus={false} /> }
          })

        }
      </section>
    </div>
  )
}

export { Wishlist }