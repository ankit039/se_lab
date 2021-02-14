import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./login.css";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                <input type="email" placeholder=" " />
                <div className="border" />
              </label>
              <label>
                <p>Password</p>
                <input type="password" placeholder=" " />
                <div className="border" />
              </label>
              <label>
                <p>Repeat Password</p>
                <input type="password" placeholder=" " />
                <div className="border" />
              </label>
              <button type="submit">Register</button>
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
    </>
  );
}

export { LoginComponent };
