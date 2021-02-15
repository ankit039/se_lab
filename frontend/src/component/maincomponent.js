import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {LoginComponent} from "./login/login"
import {NewscardComponent} from "./newscard/newscard"
import {PlatformselectComponent} from "./platformselect/platformselect"

function MainComponent() {
  const [isLogin, setisLogin] = useState(0);

  const [userdetail, setuserdetail] = useState({
    googleId: "null",
    imageUrl: "null",
    email: "null",
    name: "null",
    logintype: "null",
  });

  const isLoginvalue = { isLogin, setisLogin };
  const userdetailvalue = { userdetail, setuserdetail };

  useEffect(() => {}, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={LoginComponent} exact />
          <Route path="/platform_select" exact={true} component={PlatformselectComponent} />
          <Route path="/news" exact={true} component={NewscardComponent} />
        </Switch>
      </Router>
      {/* 
      * end of routing
      */}
    </>
  );
}

export { MainComponent };
