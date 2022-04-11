import React from 'react'
import "./CategoryCards.css"
import { NavLink } from 'react-router-dom'

function CategoryCards({ categoryName, Image }) {
  return (
    <section className="category">
      <NavLink className="category-link" to="">
        <img className="category-img" src={Image} alt="" />
        <span className="category-link-text">{categoryName}</span>
      </NavLink>
    </section>
  )
}

export {CategoryCards}