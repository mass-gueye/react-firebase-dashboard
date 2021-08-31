import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signin.styles.css";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { IconButton } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  const togglePanel = (e) => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div className="body">
      <h1>REGISTER OR SIGN IN</h1>
      <div
        className={
          toggle ? "container-signup right-panel-active" : "container-signup"
        }
        id="container-signup"
      >
        <div className="form-container sign-up-container">
          <div className="c-form">
            <h1>Create Account</h1>
            <div className="social-container">
              <IconButton onClick={signInWithGoogle}>
                <FcGoogle />
              </IconButton>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={register} disabled={!email || !password}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="c-form">
            <h1>Sign in</h1>
            <div className="social-container">
              <IconButton onClick={signInWithGoogle}>
                <FcGoogle size={50} />
              </IconButton>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/reset">Forgot Password</Link>
            <button
              onClick={() => signInWithEmailAndPassword(email, password)}
              disabled={!email || !password}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={togglePanel}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={togglePanel}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
