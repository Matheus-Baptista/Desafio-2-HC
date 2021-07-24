import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/view/Home";
import Login from "./components/view/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}