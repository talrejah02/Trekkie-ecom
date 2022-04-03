import React from 'react'
import "./filters.css"

function Filters() {
  return (
    <aside class="filter-wrapper">
        <section class="filter-header">
          <span class="filter-heading">Filters</span>
          <button class="btn-clear">clear</button>
        </section>
        <section class="filter">
          <span class="filter-subheading">price</span>
          <section class="slider-text">
            <span class="labels">50</span>
            <span class="labels">100</span>
            <span class="labels">150</span>
          </section>
          <input type="range" min="50" max="150" value="" class="slider" step="3" id="myRange" />
        </section>
        <section class="filter">
          <span class="filter-subheading">category</span>
          <section class="filter-box">
            <input type="checkbox" name="clothing" placeholder="" id="" />
            <label class="labels" for="clothing">clothing</label>
          </section>
          <section class="filter-box">
            <input type="checkbox" name="gears" placeholder="" id="" />
            <label class="labels" for="gears">gears</label>
          </section>
          <section class="filter-box">
            <input type="checkbox" name="footwear" placeholder="" id="" />
            <label class="labels" for="footwear">footwear</label>
          </section>
        </section>
        <section class="filter">
          <span class="filter-subheading">Rating</span>
          <section class="filter-box">
            <input type="radio" name="rating" id="four" />
            <label class="labels" for="four">4 Stars & above</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="rating" id="three" />
            <label class="labels" for="three">3 Stars & above</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="rating" id="two" />
            <label class="labels" for="two">2 Stars & above</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="rating" id="one" />
            <label class="labels" for="one">1 star & above</label>
          </section>
        </section>
        <section class="filter">
          <span class="filter-subheading">Sort By</span>
          <section class="filter-box">
            <input type="radio" name="sort" id="low" />
            <label class="labels" for="low">Low to High</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="sort" id="high" />
            <label class="labels" for="high">High to Low</label>
          </section>
        </section>
      </aside>
  )
}

export {Filters}