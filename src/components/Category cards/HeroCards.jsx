import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";

function HeroCards({ categoryName,categoryText, categorySubtext, Image }) {
  const { dispatch, InitialState } = useProducts();
  const navigate = useNavigate();
  return (
    <section className="category-card">
      <img alt="please reload" className="category-card-img" src={Image} />
      <section className="category-card-title">
        <span className="category-card-text">{categorySubtext}</span>
        <span className="category-card-subtext">{categoryText}</span>
      </section>
      <section className="category-card-badge">
        <span className="category-card-badge-text">STARTING FROM</span>
        <span className="badge">
          <span>₹</span>499
        </span>
      </section>
      <button
        className="category-card-btn"
        onClick={() => {
          dispatch({ type: "REFRESH_PRODUCTS", payload: InitialState });
          dispatch({ type: "CATEGORY", payload: categoryName });
          navigate("/Shop");
        }}
      >
        <NavLink className="btn-link" to="">
          EXPLORE NOW
        </NavLink>
      </button>
    </section>
  );
}

export { HeroCards };
