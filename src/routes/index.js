import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import DashBoard from "../containers/dashboard";
import Login from "../containers/login";
import CreateCar from "../containers/createCar";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashBoard} isPrivate />
      <Route exact path="/" component={Login} />
      <Route exact path="/CreateCar" component={CreateCar} isPrivate />
    </Switch>
  );
}
