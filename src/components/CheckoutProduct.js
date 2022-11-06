import React, { useState } from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <small>$</small>
        <strong>{props.price}</strong>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill() // fills the array of X with null
            .map(() => (
              // maps through each and renders a star
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
