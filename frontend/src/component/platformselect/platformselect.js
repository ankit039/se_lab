import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./platformselect.css";

function PlatformselectComponent() {
  const [select, setselected] = useState([]);
  const [tickarr, setTickarr] = useState([false, false, false, false]);

  const add_selected = (id) => {
    let selected = select;
    if (selected.indexOf(id) == -1) {
      selected.push(id);

      var i;
      var temparr = [];
      for (i = 0; i < tickarr.length; i++) {
        i == id - 1 ? (temparr[i] = true) : (temparr[i] = tickarr[i]);
      }

      setTickarr(temparr);
      setselected(selected);
    } else {
      var i = selected.indexOf(id);
      if (i != -1) {
        selected.splice(i, 1);

        var i;
        var temparr = [];
        for (i = 0; i < tickarr.length; i++) {
          i == id - 1 ? (temparr[i] = false) : (temparr[i] = tickarr[i]);
        }

        setTickarr(temparr);
        setselected(selected);
      }
    }
  };

  return (
    <>
      <div className="parent-platformselect">
        <h3 style={{position: "absolute", right:0, top:0, padding: "20px"}}>Hi, {localStorage.getItem('email')}</h3>
        <div id="app">
          <div id="app-content">
            <h3 style={{ paddingLeft: "20px" }}>Select News Platform</h3>
            <div style={{ position: "relative" }}></div>
            <ul className="user-list">
              {platform.map((item, index) => (
                <li
                  key={index}
                  style={{ position: "relative" }}
                  onClick={() => {
                    add_selected(item.id);
                  }}
                >
                  <div className="user-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="user-data">
                    <h4>{item.name}</h4>
                    <span>{item.link}</span>
                  </div>
                  <label className="round-checkbox">
                    <span
                      className={
                        "checkmark " +
                        (tickarr[item.id - 1] == true ? "checked" : "")
                      }
                    ></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <a href="javascript:;" className="btn">
            Done
          </a>
        </div>
      </div>
    </>
  );
}

const platform = [
  {
    id: 1,
    name: "BBC News",
    link: "https://www.bbc.com/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: 2,
    name: "Inshorts",
    link: "https://inshorts.com/",
    image:
      "https://pbs.twimg.com/profile_images/627085479268126720/k4Wwj-lS.png",
  },
  {
    id: 3,
    name: "The Times Of India ",
    link: "https://timesofindia.indiatimes.com/",
    image:
      "https://ces.org.ua/wp-content/uploads/2020/04/com.toi_.reader.activities.png",
  },
  {
    id: 4,
    name: "Google News",
    link: "https://news.google.com/",
    image:
      "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=w300-rw",
  },
];

export { PlatformselectComponent };
