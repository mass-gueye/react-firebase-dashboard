import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user] = useAuthState(auth);

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return user ? <Component {...props} /> : <Redirect to="/"/> ;
        }}
      />
    </>
  );
}
