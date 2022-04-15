import React from 'react'
import "./ProductPage.css"
import {Filters,ProductListing} from "../../components/index"
import { useProducts } from '../../context/ProductsContext'
import { useState,useEffect } from 'react/cjs/react.development'
import axios from 'axios'

function ProductPage() {
  const [defaultProducts,setDefaultProducts]=useState([])
  const {state,dispatch}=useProducts()
  
  useEffect(()=>{ 
    (async ()=>{
        try{
             const response = await axios.get("/api/products")
             dispatch({type:"ADD_PRODUCTS",payload:response.data.products})
             setDefaultProducts(response.data.products)
        }catch(error){

            console.log(error)
        }
    })();
    }, [])

  return (
    <div className='main-wrapper'>
     <Filters data={defaultProducts} />
     <ProductListing products={state.products} />
    </div>
  )
}

export {ProductPage}