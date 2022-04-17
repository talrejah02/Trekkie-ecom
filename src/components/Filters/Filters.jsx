import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useProducts } from '../../context/ProductsContext'
import "./filters.css"

function Filters({data}) {  
  const {dispatch,InitialState}= useProducts()
  const [slider,setSlider]=useState(10000)

  const sliderHandler=(e)=>{
    // dispatch({type:"REFRESH_PRODUCTS",payload:data})
    setSlider(parseInt(e.target.value,10))
    dispatch({type:"PRICE_RANGE",payload:slider})
  }

  const categoryRatingsHandler=(e)=>{
    // dispatch({type:"REFRESH_PRODUCTS",payload:data})
    if(e.target.checked){
      dispatch({type:e.target.name,payload:e.target.value}) 
    }else{
      dispatch({type:"REMOVE-CATEGORY",payload:e.target.value}) 
    }
  }

  

  return (
    <aside class="filter-wrapper">
        <section class="filter-header">
          <span class="filter-heading">Filters</span>
          <button class="btn-clear" onClick={()=> dispatch({type:"REFRESH_PRODUCTS",payload:InitialState})}>clear</button>
        </section>
        <section class="filter">
          <span class="filter-subheading">price</span>
          <input type="range" min="99" max="15999" step={1} value={slider}   class="slider"  onChange={(e)=>sliderHandler(e)} onClick={(e)=>sliderHandler(e)}  />
          <span>{slider}</span>
        </section>
        <section class="filter">
          <span class="filter-subheading">category</span>
          <section class="filter-box">
            <input type="checkbox" name="CATEGORY" value="backpacks" onChange={(e)=>categoryRatingsHandler(e)} />
            <label class="labels" for="backpacks">Backpacks</label>
          </section>
          <section class="filter-box">
            <input type="checkbox" name="CATEGORY" value="clothing" onChange={(e)=>categoryRatingsHandler(e)} />
            <label class="labels" for="clothing">Clothing</label>
          </section>
          <section class="filter-box">
            <input type="checkbox" name="CATEGORY" value="camping" onChange={(e)=>categoryRatingsHandler(e)} />
            <label class="labels" for="camping">Camping</label>
          </section>
          <section class="filter-box">
            <input type="checkbox" name="CATEGORY" value="footwear" onChange={(e)=>categoryRatingsHandler(e)} />
            <label class="labels" for="footwear">Footwear</label>
          </section>
          <section class="filter-box">
            <input type="checkbox" name="CATEGORY" value="gears" onChange={(e)=>categoryRatingsHandler(e)} />
            <label class="labels" for="gears">Gears</label>
          </section>
        </section>
        <section class="filter">
          <span class="filter-subheading">Rating</span>
          <section class="filter-box">
            <input type="radio" name="RATINGS" value={4} onChange={(e)=>categoryRatingsHandler(e)}/>
            <label class="labels" >4 Stars & above</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="RATINGS" id="three" value={3} onChange={(e)=>categoryRatingsHandler(e)}/>
            <label class="labels" for="three">3 Stars & above</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="RATINGS" id="two" value={2} onChange={(e)=>categoryRatingsHandler(e)}/>
            <label class="labels" for="two">2 Stars & above</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="RATINGS" id="one" value={1} onChange={(e)=>categoryRatingsHandler(e)}/>
            <label class="labels" for="one">1 star & above</label>
          </section>
        </section>
        <section class="filter">
          <span class="filter-subheading">Sort By</span>
          <section class="filter-box">
            <input type="radio" name="sort" id="low" onChange={()=>dispatch({type:"LOW_TO_HIGH",payload:"ascending"})} />
            <label class="labels" for="low">Low to High</label>
          </section>
          <section class="filter-box">
            <input type="radio" name="sort" id="high" onChange={()=>dispatch({type:"HIGH_TO_LOW",payload:"descending"})} />
            <label class="labels" for="high">High to Low</label>
          </section>
        </section>
      </aside>
  )
}

export {Filters}