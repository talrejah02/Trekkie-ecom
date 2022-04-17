import React from 'react'
import "./CategoryCards.css"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'

function CategoryCards({ categoryName, Image }) {
  const navigate=useNavigate()
  const{InitialState,dispatch} =useProducts()
  return (
    <section className="category" onClick={()=>{
      dispatch({type:"REFRESH_PRODUCTS",payload:InitialState})
      dispatch({type:"CATEGORY",payload:categoryName})
       navigate("/Shop")
    }}>
      <NavLink className="category-link" to="" >
        <img className="category-img" src={Image} alt="" />
        <span className="category-link-text">{categoryName}</span>
      </NavLink>
    </section>
  )
}

export {CategoryCards}