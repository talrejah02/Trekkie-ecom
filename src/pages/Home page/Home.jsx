import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoryCards from '../../components/Category cards/CategoryCards'
import { categories, HeroCategories } from '../../backend/db/categories'
import "./Home.css"
import HeroCards from '../../components/Category cards/HeroCards'

function Home() {
  return (
    <div> <section className="hero">
      <img alt="please reload" className="hero-image"
        src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs896860%2Fk%24382f8943451fc70c7f2ae3d4ab3db60a%2Fdesktop.jpg%3Ff%3D0x250%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75" />
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

export default Home