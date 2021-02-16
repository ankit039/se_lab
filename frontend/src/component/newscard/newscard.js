import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./newscard.css";

function NewscardComponent() {
  return (
    <>
      <div className="parent-newscard">
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


      </div>
    </>
  );
}

export { NewscardComponent };
