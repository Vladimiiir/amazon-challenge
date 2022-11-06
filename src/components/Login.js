import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase";

function Login() {
  const [email, setEmail] = useState(""); // have an empty string - not null!
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault(); // prevents page from refreshing - no refreshing in react!
    // firebase login shit
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // firebase register shit
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created user with email and password
        // console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      {/* email and stuff */}
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account Here
        </button>
      </div>
    </div>
  );
}

export default Login;
