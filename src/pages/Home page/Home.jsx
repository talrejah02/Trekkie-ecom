import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <div> <section className="hero">
      <img alt="please reload" className="hero-image" 
        src="https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs896860%2Fk%24382f8943451fc70c7f2ae3d4ab3db60a%2Fdesktop.jpg%3Ff%3D0x250%3Ff%3D1920x470%26format%3Dauto&w=1920&q=75" />
    </section>

      <section className="category-nav">
        <section className="category">
          <NavLink className="category-link" to="">
            <img className="category-img" src="Images/jacket.jpg" alt="" />
            <span className="category-link-text">Clothing</span>
          </NavLink>
        </section>
        <section className="category">
          <NavLink className="category-link" to="">
            <img className="category-img" src="Images/tent.jpg" alt="" />
            <span className="category-link-text">Camping</span>
          </NavLink>
        </section>
        <section className="category">
          <NavLink className="category-link" to="">
            <img className="category-img" src="Images/shoes.webp" alt="" />
            <span className="category-link-text">Footwear</span>
          </NavLink>
        </section>
        <section className="category">
          <NavLink className="category-link" to="">
            <img className="category-img" src="Images/bag.jpg" alt="" />
            <span className="category-link-text">Backpack</span>
          </NavLink>
        </section>
        <section className="category">
          <NavLink className="category-link" to="">
            <img className="category-img" src="Images/light.jpg" alt="" />
            <span className="category-link-text">Equipments</span>
          </NavLink>
        </section>
      </section>

      <section className="category-container">
        <section className="category-card">
          <img alt="please reload" className="category-card-img" src="Images/jackets.jpg" />
          <section className="category-card-title">
            <span className="category-card-text">WATERPROOF</span>
            <span className="category-card-subtext">JACKETS</span>
          </section>
          <section className="category-card-badge">
            <span className="category-card-badge-text">STARTING FROM</span>
            <span className="badge"><span>₹</span>499</span>
          </section>
          <button className="category-card-btn" to="">
            <NavLink className="btn-link" to="">
              EXPLORE NOW
            </NavLink>

          </button>
        </section>

        {/* <!-- card2 --> */}
        <section className="category-card">
          <img alt="please reload" className="category-card-img" src="Images/backpack1.jpg" />
          <section className="category-card-title">
            <span className="category-card-text">10-90L</span>
            <span className="category-card-subtext">BACKPACKS</span>
          </section>
          <section className="category-card-badge">
            <span className="category-card-badge-text">STARTING FROM</span>
            <span className="badge"><span>₹</span>199</span>
          </section>
          <button className="category-card-btn"><NavLink className="btn-link" to="./pages/product/product.html">
            EXPLORE NOW
          </NavLink> </button>
        </section>

        {/* <!-- card 3 --> */}

        <section className="category-card">
          <img alt="please reload" className="category-card-img" src="Images/gears.jpg" />
          <section className="category-card-title">
            <span className="category-card-text">TREKKING</span>
            <span className="category-card-subtext">Gears</span>
          </section>
          <section className="category-card-badge">
            <span className="category-card-badge-text">STARTING FROM</span>
            <span className="badge"><span>₹</span>199</span>
          </section>
          <button className="category-card-btn"><NavLink className="btn-link" to="./pages/product/product.html">
            EXPLORE NOW
          </NavLink> </button>
        </section>

        {/* <!-- card4 --> */}

        <section className="category-card">
          <img alt="please reload" className="category-card-img" src="Images/jackets.jpg" />
          <section className="category-card-title">
            <span className="category-card-text">CAMPING</span>
            <span className="category-card-subtext">TENTS</span>
          </section>
          <section className="category-card-badge">
            <span className="category-card-badge-text">STARTING FROM</span>
            <span className="badge"><span>₹</span>499</span>
          </section>
          <button className="category-card-btn"><NavLink className="btn-link" to="./pages/product/product.html">
            EXPLORE NOW
          </NavLink> </button>
        </section>

      </section>
    </div>
  )
}

export default Home