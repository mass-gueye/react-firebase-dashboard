import "./App.css";
import React from "react";
// react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// react-firease-hooks
import { useAuthState } from "react-firebase-hooks/auth";
// firease
import { auth } from "./firebase";
// components
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function App() {

  const [user] = useAuthState(auth);

  function Courses() {
    return (
      <div className="c-form">
        <h1>Courses</h1>
      </div>
    );
  }

  return (
    <div>
      <Router>
        {user && <Navigation />}
        <div>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
