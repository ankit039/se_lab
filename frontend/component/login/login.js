import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './login.css';

function loginComponent() {


  return (
    <>
      <div id="formContainer">
        <div className="formLeft">
          <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        </div>
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
              <button type="button" className="forgotBtn">
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
                <p>Username</p>
                <input type="text" placeholder=" " />
                <div className="border" />
              </label>
              <label>
                <p>Password</p>
                <input type="password" placeholder=" " />
                <div className="border" />
              </label>
              <button type="submit">Login</button>
            </section>
            <footer>
              <button type="button" className="forgotBtn">
                Forgot password?
              </button>
              <button type="button" className="registerBtn">
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
              <button type="button" className="registerBtn">
                Back
              </button>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
}

export { loginComponent };
