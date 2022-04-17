import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { usePrivateproducts } from '../../context/PrivateProductsContext'
import "./ProductCard.css"

function ProductCard({item,wishlistStatus,cartStatus}) {
    const [inCart,setCart]=useState(false)
    const [inWishlist,setWishlist]=useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
    setWishlist(()=>wishlistStatus)
    },[wishlistStatus])

    const addTowishlist =()=>{
        if(!inWishlist){
            dispatch({type:"ADD_TO_WISHLIST",payload:item})
            setWishlist(true)
        }else{
            dispatch({type:"REMOVE_FROM_WISHLIST",payload:item})
            setWishlist(false)
        }
    }
    const addToCart=()=>{
        dispatch({type:"Add_To_Cart",payload:item})
        setCart(true)
    }

    const {dispatch} = usePrivateproducts()
    return (
        <section className="card">
            <img className="card-img" src={item.image} alt="" />
            <section className="card-description">
                <section className="card-detail">
                    <span className="card-category">{item.categoryName}</span>
                    <span className="card-title">{item.title}</span>
                </section>
                <section className="product-price">
                    <span className="price">₹{item.discountedPrice}</span>
                    <s className="og-price">{item.orignalPrice}</s>
                    <span className="product-discount">{item.offer} off</span>
                </section>
                {!cartStatus&& !inCart&& <button className="cart-btn" onClick={()=>addToCart()}>Add to cart
                    <span className="cart-svg"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        className="iconify iconify--ic" width="18" height="18" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"
                            fill="currentColor"></path>
                    </svg></span>
                </button>
                }
                
                {cartStatus? <button className="cart-btn" onClick={()=>navigate("/cart")}>Go to cart
                    <span className="cart-svg"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        className="iconify iconify--ic" width="18" height="18" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"
                            fill="currentColor"></path>
                    </svg></span>
                </button>:inCart&&<button className="cart-btn" onClick={()=>navigate("/Cart")}>Go to cart
                    <span className="cart-svg"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        className="iconify iconify--ic" width="18" height="18" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"
                            fill="currentColor"></path>
                    </svg></span>
                </button>}
            </section>
            <section className="card-badge">BEST SELLER</section>
            <section className="card-badge two">BEST value</section>
            <span className="wishlist-badge" onClick={()=>addTowishlist()} >
           {!wishlistStatus&& !inWishlist&&
             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill='transparent' d="M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124Z"></path><path fill='black' d="M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1Zm-3.9-15ZM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48Z"></path></svg>
           }
           
         {inWishlist&&
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ph" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill='#E0245E' d="M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124Z"></path><path fill='#E0245E' d="M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1Zm-3.9-15ZM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48Z"></path></svg>
          }
           

            
            </span>
        </section>
    )
}

export {ProductCard}