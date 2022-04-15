import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProducts } from '../../context/ProductsContext'


function HeroCards({ categoryName,categoryText, categorySubtext, Image }) {
   const {dispatch}=useProducts()
   
    return (
        <section className="category-card">
            <img alt="please reload" className="category-card-img" src={Image} />
            <section className="category-card-title">
                <span className="category-card-text">{categorySubtext}</span>
                <span className="category-card-subtext">{categoryText}</span>
            </section>
            <section className="category-card-badge">
                <span className="category-card-badge-text">STARTING FROM</span>
                <span className="badge"><span>₹</span>499</span>
            </section>
                <NavLink className=" category-card-btn btn-link" to="/Shop" onClick={()=>dispatch({type:"CATEGORY",payload:categoryName})} >
                    EXPLORE NOW
                </NavLink>
        </section>
    )
}

export {HeroCards}