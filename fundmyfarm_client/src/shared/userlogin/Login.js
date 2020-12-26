import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Logo from "../../assets/Logo.svg";
import Footer from "../components/Footer";

import "./Login.css";

function Login(props) {
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);
    axios
      .post("/auth/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          setLoader(false);
          //   setUserSession(response.data.token, response.data.user);
          props.history.push("/lender/overview");
        } else {
          setIsError(true);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <>
      <header>
        <nav class="navbar">
          <Link class="navbar-brand" to="/">
            <img src={Logo} width="221" height="60" alt="logo" loading="lazy" />
          </Link>
        </nav>
      </header>
      <main className="userlogin">
        <div className="login-header text-center">
          <h1 className="text-center">My Account</h1>
          <p>Login and continue to enjoy our unique services</p>
        </div>

        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div class="form-group">
            <label for="EmailInput">Email</label>
            <input
              type="email"
              class="form-control"
              id="EmailInput"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="buttons-container text-right">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password">Forget Password?</p>
          <div className="no-account text-center">
            Dont have an account ?{" "}
            <span>
              <Link to="/register">Join Us</Link>
            </span>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
