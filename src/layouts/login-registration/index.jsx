import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/NavBar/Nav";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import "./style.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Nav />
      <SignUpComponent header="Welcome back!">
        <div className="sign-in">
          <p className="signup-header">
            Sign in to access your account. <br />
            Not registered?.
            <Link to="/signup" className="signup-message">
              {" "}
              Create an account.
            </Link>
          </p>
          {children}
        </div>
      </SignUpComponent>
    </div>
  );
}

export default Layout;
