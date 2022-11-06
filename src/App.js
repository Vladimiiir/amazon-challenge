import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase/Firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import React from "react";

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
      </Routes>
    </div>
  );
}

export default App;
