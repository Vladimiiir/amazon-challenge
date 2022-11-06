import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product(props) {
  // calling the dataLayer
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    // dispatch some action (the item) into the dataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>AED</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={props.image} />
      <button onClick={addToBasket} className="product__button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
