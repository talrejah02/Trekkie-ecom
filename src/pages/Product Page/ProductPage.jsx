import React from 'react'
import "./ProductPage.css"
import {Filters,ProductListing} from "../../components/index"

function ProductPage() {
  return (
    <div className='main-wrapper'>
     <Filters/>
     <ProductListing/>
    </div>
  )
}

export {ProductPage}