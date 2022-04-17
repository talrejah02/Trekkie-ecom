import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useProducts } from '../../context/ProductsContext'
import "./filters.css"

function Filters({data}) {  
  const {dispatch}= useProducts()
  const [slider,setSlider]=useState(10000)
  

  
  const sliderHandler=(e)=>{
    dispatch({type:"REFRESH_PRODUCTS",payload:data})
    setSlider(parseInt(e.target.value,10))
    dispatch({type:"PRICE_RANGE",payload:slider})
  }

  const categoryHandler=(e)=>{
    dispatch({type:"REFRESH_PRODUCTS",payload:data})
    dispatch({type:e.target.name,payload:e.target.value}) 
  }

  

  return (
    <aside className="filter-wrapper">
        <section className="filter-header">
          <span className="filter-heading">Filters</span>
          <button className="btn-clear" onClick={()=> dispatch({type:"REFRESH_PRODUCTS",payload:data})}>clear</button>
        </section>
        <section className="filter">
          <span className="filter-subheading">price</span>
          <input type="range" min="99" max="15999" step={1} value={slider}   className="slider"  onChange={(e)=>sliderHandler(e)} onClick={(e)=>sliderHandler(e)}  />
          <span>{slider}</span>
        </section>
        <section className="filter">
          <span className="filter-subheading">category</span>
          <section className="filter-box">
            <input type="radio" name="CATEGORY" value="backpacks" onChange={()=>dispatch({type:"REFRESH_PRODUCTS",payload:data})} />
            <label className="labels" >ALL</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="CATEGORY" value="backpacks" onChange={(e)=>categoryHandler(e)} />
            <label className="labels" >Backpacks</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="CATEGORY" value="clothing" onChange={(e)=>categoryHandler(e)} />
            <label className="labels">Clothing</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="CATEGORY" value="camping" onChange={(e)=>categoryHandler(e)} />
            <label className="labels">Camping</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="CATEGORY" value="footwear" onChange={(e)=>categoryHandler(e)} />
            <label className="labels">Footwear</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="CATEGORY" value="gears" onChange={(e)=>categoryHandler(e)} />
            <label className="labels" >Gears</label>
          </section>
        </section>
        <section className="filter">
          <span className="filter-subheading">Rating</span>
          <section className="filter-box">
            <input type="radio" name="RATINGS" value={4} onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value}) }/>
            <label className="labels" >4 Stars & above</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="RATINGS" id="three" value={3} onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value}) }/>
            <label className="labels" >3 Stars & above</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="RATINGS" id="two" value={2} onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value}) }/>
            <label className="labels" >2 Stars & above</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="RATINGS" id="one" value={1} onChange={(e)=>dispatch({type:e.target.name,payload:e.target.value}) }/>
            <label className="labels" >1 star & above</label>
          </section>
        </section>
        <section className="filter">
          <span className="filter-subheading">Sort By</span>
          <section className="filter-box">
            <input type="radio" name="sort" id="low" onChange={()=>dispatch({type:"LOW_TO_HIGH"})} />
            <label className="labels" >Low to High</label>
          </section>
          <section className="filter-box">
            <input type="radio" name="sort" id="high" onChange={()=>dispatch({type:"HIGH_TO_LOW"})} />
            <label className="labels" >High to Low</label>
          </section>
        </section>
      </aside>
  )
}

export {Filters}