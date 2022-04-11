import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav">
            <section className="header-logo">
                <section className="header-svg"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                    className="iconify iconify--iconoir" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24">
                    <path fill="none" stroke="#FFEA29" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="m18 10l-3 1.5l-4-3l-1 5.5l3.5 3l.5 4.5m4-13v13M10 17l-2 4.5m.5-13C7 9.5 6 12 6 12l2 1m4-6.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z">
                    </path>
                </svg></section>
                <span className="heading"><NavLink to="/" className="heading-link">Trekkie</NavLink></span>
            </section>
            <section className="header-search">
                <section className="header-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" className="iconify iconify--icon-park-outline" width="20" height="20"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
                            <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></path>
                            <path strokeLinecap="round"
                                d="M26.657 14.343A7.975 7.975 0 0 0 21 12c-2.21 0-4.21.895-5.657 2.343m17.879 18.879l8.485 8.485">
                            </path>
                        </g>
                    </svg>
                </section>
                <input className="header-search-input" type="text" placeholder="search" />
            </section>
            <section className="nav-right">
                <NavLink to="/Shop" className="nav-link">Shop</NavLink>
                <NavLink to="/" className="nav-link">Login</NavLink>
                <NavLink to="/" className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" className="iconify iconify--ph" width="20" height="20"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M128 222a6 6 0 0 1-2.9-.8c-1.1-.5-25.9-14.6-51.1-37.2c-34.5-31.1-52-62-52-92a58 58 0 0 1 106-32.6A58 58 0 0 1 234 92c0 30-17.5 60.9-52 92c-25.2 22.6-50 36.7-51.1 37.2a6 6 0 0 1-2.9.8ZM80 46a46 46 0 0 0-46 46c0 57.3 77.8 107.3 94 117c16.2-9.7 94-59.7 94-117a46 46 0 0 0-88.5-17.7a5.9 5.9 0 0 1-11 0A46 46 0 0 0 80 46Z">
                        </path>
                    </svg>
                </NavLink>
                <NavLink to="/" className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" className="iconify iconify--ph" width="20" height="20"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="m211.7 132.3l12.2-66.9a7.7 7.7 0 0 0-1.8-6.5A7.9 7.9 0 0 0 216 56H54.7l-4.9-26.9A16 16 0 0 0 34.1 16H16a8 8 0 0 0 0 16h18.1l27.4 151a28 28 0 1 0 43.8 9h53.4a28 28 0 1 0 25.3-16H76.5l-4.4-24h116a24 24 0 0 0 23.6-19.7ZM92 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm104 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12ZM57.6 72h148.8L196 129.4a8 8 0 0 1-7.9 6.6H69.2Z">
                        </path>
                    </svg>
                </NavLink>
                <NavLink to="/" className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                </NavLink>
            </section>
        </nav>
    )
}

export {Nav}