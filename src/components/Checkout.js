import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="/pictures/amazon-banner.jpg" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        {/* <h2>The subtotal will go here</h2> */}
        <Subtotal />
        {/* Basket Item */}
        {/* Basket Item */}
        {/* Basket Item */}
      </div>
    </div>
  );
}

export default Checkout;
