import React from "react";
import { CartitemCard, CartTotal } from "../../components/index";
import { usePrivateproducts } from "../../context/PrivateProductsContext";
import "./Cart.css";
function Cart() {
  const { state, dispatch } = usePrivateproducts();
  const CartItem = true;

  return (
    <div>
      <section className="page-header">
        {state.cart.length == 0 ? "YOU HAVE NO ITEMS IN YOUR CART" : "MY CART"}
      </section>
      {CartItem && (
        <section className="cart-wrapper">
          <section className="cart-item-container">
            {state.cart.map((item) => (
              <CartitemCard item={item} />
            ))}
          </section>
          <CartTotal/>
        </section>
      )}
    </div>
  );
}

export { Cart };
