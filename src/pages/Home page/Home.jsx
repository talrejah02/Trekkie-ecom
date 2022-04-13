import React from 'react'
import { NavLink } from 'react-router-dom'
import {CategoryCards,HeroCards} from '../../components/index'
import { categories, HeroCategories } from '../../backend/db/categories'
import "./Home.css"

function Home() {
  return (
    <div> <section className="hero">
      <img alt="" className="hero-image"
        src="Images/cover.webp" />
    </section>

      <section className="category-nav">
        {
          categories.map((category) => <CategoryCards{...category} />)
        }
      </section>

      <section className="category-container">
        {
          HeroCategories.map((cards) => <HeroCards{...cards} />)
        }
      </section>
    </div>
  )
}

export {Home}