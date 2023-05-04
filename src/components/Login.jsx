import React from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import "./Login.css";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
};

export default Login;
