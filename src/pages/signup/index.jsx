import React from "react";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import Layout from "../../layouts/signup-registation";

function SignUp() {
  return (
    <Layout>
      <SignUpComponent header="Sign up to Planetbase.">
        <p className="signup-header">Let's setup an account for you</p>
      </SignUpComponent>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-container">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <div className="checkbox-container">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p>
              Send me product updates and marketing communications from
              Planetbase
            </p>
          </div>
          <button type="submit" className="input-button">
            Sign Up
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default SignUp;
