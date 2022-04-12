import React from 'react'
import "../../pages/Cart-page/Cart.css"
function CartitemCard() {
    return (
        <section className="card horizontal">
            <img className="card-img" src="Images/sweater.webp" alt="" />
            <section className="card-description">
                <section className="card-detail">
                    <span className="card-category">category</span>
                    <span className="card-title">product title</span>
                </section>

                <section className="product-price">
                    <span className="price">₹299</span>
                    <s className="og-price">499</s>
                    <span className="product-discount">40% off</span>
                </section>
                <section className="product-qty">
                    <button className="qty-btn">
                        <span className="qty-btn-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
                            </svg>
                        </span>
                    </button>
                    <span>1</span>
                    <button className="qty-btn">
                        <span class="qty-btn-svg">

                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bi" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></svg>
                        </span>
                    </button>
                </section>
                <button class="cart-btn">Remove from cart
                    <span class="cart-svg"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        class="iconify iconify--ic" width="18" height="18" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"
                            fill="currentColor"></path>
                    </svg></span>

                </button>

                <button class="cart-btn">Move to wishlist
                    <span class="cart-svg"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        class="iconify iconify--ph" width="20" height="20" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M128 222a6 6 0 0 1-2.9-.8c-1.1-.5-25.9-14.6-51.1-37.2c-34.5-31.1-52-62-52-92a58 58 0 0 1 106-32.6A58 58 0 0 1 234 92c0 30-17.5 60.9-52 92c-25.2 22.6-50 36.7-51.1 37.2a6 6 0 0 1-2.9.8ZM80 46a46 46 0 0 0-46 46c0 57.3 77.8 107.3 94 117c16.2-9.7 94-59.7 94-117a46 46 0 0 0-88.5-17.7a5.9 5.9 0 0 1-11 0A46 46 0 0 0 80 46Z">
                        </path>
                    </svg></span>
                </button>

            </section>
            <section class="card-badge">BEST SELLER</section>
            <section class="card-badge two">BEST value</section>
            <span class="wishlist-badge">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img" className="iconify iconify--ph" width="22" height="22"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                    <path className="outline"
                        d="M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124z">
                    </path>
                    <path className="inside"
                        d="M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1zm-3.9-15zM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48z">
                    </path>
                </svg>
            </span>
        </section>
    )
}

export {CartitemCard}