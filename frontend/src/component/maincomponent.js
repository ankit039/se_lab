import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"

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
      <AuthProvider>
        <Switch>
          <Route path="/" exact={true} component={LoginComponent} exact />
          <Route path="/platform_select" exact={true} component={PlatformselectComponent} />
          <Route path="/news" exact={true} component={NewscardComponent} />
        </Switch>
        </AuthProvider>
      </Router>
      {/* 
      * end of routing
      */}
    </>
  );
}

export { MainComponent };
