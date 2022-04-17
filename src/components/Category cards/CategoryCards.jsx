import React from 'react'
import { useEffect } from 'react'
import "./CategoryCards.css"
import { NavLink } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'
import axios from 'axios'

function CategoryCards({ categoryName, Image }) {
  const {dispatch}=useProducts()
  useEffect(()=>{ 
    (async ()=>{
        try{
              const response = await axios.get("/api/products")
              dispatch({type:"ADD_PRODUCTS",payload:response.data.products}) 
        }catch(error){
            console.log(error)
        }
    })();
    }, [])

  return (
    <section className="category">
      <NavLink className="category-link" to="/Shop" onClick={()=>dispatch({type:"CATEGORY",payload:categoryName})}>
        <img className="category-img" src={Image} alt="" />
        <span className="category-link-text">{categoryName}</span>
      </NavLink>
    </section>
  )
}

export {CategoryCards}