import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase/Firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Lzk9UJoJ8eS77pj2T8CX109svzNVbXZfOD26r5wSs14WUjqfnl1njzeB77w4psiljyfJpgD7K8K977cVNlmsiqJ002dSYvsQx",
  {
    locale: "en",
  }
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  // create a listner to keep track of who is signing in
  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER", // fire off the event and shoot it into the dataLayer
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null, // nobody is logged in
        });
      }
    });
  }, []);
  return (
    // BEM
    <div className="app">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
