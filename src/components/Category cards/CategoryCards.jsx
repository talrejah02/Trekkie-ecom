import React from 'react'
import "./CategoryCards.css"
import { NavLink } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'

function CategoryCards({ categoryName, Image }) {
  const {dispatch}=useProducts()
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