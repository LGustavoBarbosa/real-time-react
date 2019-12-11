import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = store.getState().user.signed;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}
