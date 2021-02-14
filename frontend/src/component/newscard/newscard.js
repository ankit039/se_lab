import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./newscard.css";

function NewscardComponent() {
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
      <div>
        <figure className="snip1216">
          <div className="image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg"
              alt="sample69"
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">28</span>
              <span className="month">Oct</span>
            </div>
            <h3>The World Ended Yesterday</h3>
            <p>
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
            </p>
          </figcaption>
          <footer>
            <div className="views">
              <i className="ion-eye" />
              2,907
            </div>
            <div className="love">
              <i className="ion-heart" />
              623
            </div>
            <div className="comments">
              <i className="ion-chatboxes" />
              23
            </div>
          </footer>
          <a href="#" />
        </figure>
        <figure className="snip1216 hover">
          <div className="image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample68.jpg"
              alt="sample68"
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">17</span>
              <span className="month">Nov</span>
            </div>
            <h3>An Abstract Post Heading</h3>
            <p>
              Sometimes the surest sign that intelligent life exists elsewhere
              in the universe is that none of it has tried to contact us.
            </p>
          </figcaption>
          <footer>
            <div className="views">
              <i className="ion-eye" />
              1,870
            </div>
            <div className="love">
              <i className="ion-heart" />
              973
            </div>
            <div className="comments">
              <i className="ion-chatboxes" />
              85
            </div>
          </footer>
          <a href="#" />
        </figure>
        <figure className="snip1216">
          <div className="image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample58.jpg"
              alt="sample58"
            />
          </div>
          <figcaption>
            <div className="date">
              <span className="day">01</span>
              <span className="month">Dec</span>
            </div>
            <h3>Down with this sort of thing</h3>
            <p>
              I don't need to compromise my principles, because they don't have
              the slightest bearing on what happens to me anyway.
            </p>
          </figcaption>
          <footer>
            <div className="views">
              <i className="ion-eye" />
              928
            </div>
            <div className="love">
              <i className="ion-heart" />
              198
            </div>
            <div className="comments">
              <i className="ion-chatboxes" />
              23
            </div>
          </footer>
          <a href="#" />
        </figure>
      </div>
    </>
  );
}

export { NewscardComponent };
