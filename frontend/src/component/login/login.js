import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {fire} from "./fire";
import "./login.css";

function LoginComponent() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;

          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Worked  " + userCredential);
      })
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            alert(err.message);
            break;

          case "auth/weak-password":
            alert(err.message);
            break;

          default :
            alert("Atharva20");
        }
      });
      fire.currentUser.sendEmailVerification();
  };

  const logOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  const forgotbutton = () => {
    var element = document.getElementById("forgot");
    element.classList.toggle("toggle");
  };

  const registerbutton = () => {
    var element1 = document.getElementById("register");
    var element2 = document.getElementById("formContainer");
    element1.classList.toggle("toggle");
    element2.classList.toggle("toggle");
  };

  return (
    <>
      <div className="parent-login">
        <div id="formContainer">
          <div className="formRight">
            {/* Forgot password form */}
            <form id="forgot" className="otherForm">
              <header>
                <h1>Forgot Password</h1>
                <p>Seems like your password is missing</p>
              </header>
              <section>
                <label>
                  <p>Email</p>
                  <input type="email" placeholder=" " />
                  <div className="border" />
                </label>
                <button type="submit">Send email</button>
              </section>
              <footer>
                <button
                  type="button"
                  className="forgotBtn"
                  onClick={() => {
                    forgotbutton();
                  }}
                >
                  Back
                </button>
              </footer>
            </form>
            {/* Login form */}
            <form id="login">
              <header>
                <h1>Welcome back</h1>
                <p>Login to continue</p>
              </header>
              <section>
                <label>
                  <p>E-mail</p>
                  <input
                    type="text"
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className="border" />
                </label>
                <label>
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <div className="border" />
                </label>
                <button type="submit">Login</button>
              </section>
              <footer>
                <button
                  type="button"
                  className="forgotBtn"
                  onClick={() => {
                    forgotbutton();
                  }}
                >
                  Forgot password?
                </button>
                <button
                  type="button"
                  className="registerBtn"
                  onClick={() => {
                    registerbutton();
                  }}
                >
                  Need an account?
                </button>
              </footer>
            </form>
            {/* Register form */}
            <form id="register" className="otherForm">
              <header>
                <h1>Become a Bro</h1>
                <p>Register to gain full access</p>
              </header>
              <section>
                <label>
                  <p>Username</p>
                  <input type="text" placeholder=" " />
                  <div className="border" />
                </label>
                <label>
                  <p>Email</p>
                  <input type="email" placeholder=" " onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                  <div className="border" />
                </label>
                <label>
                  <p>Password</p>
                  <input type="password" placeholder=" " onChange={(e) => setPassword(e.target.value)}
                    value={password}/>
                  <div className="border" />
                </label>
                <label>
                  <p>Repeat Password</p>
                  <input type="password" placeholder=" " />
                  <div className="border" />
                </label>
                <button type="submit" onClick={() => {
                    handleSignUp();
                  }}>
                    Register</button>
              </section>
              <footer>
                <button
                  type="button"
                  className="registerBtn"
                  onClick={() => {
                    registerbutton();
                  }}
                >
                  Back
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { LoginComponent };
