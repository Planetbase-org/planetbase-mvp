import React from "react";
import Layout from "../../layouts/login-registration";

function Login() {
  return (
    <Layout>
      <form>
        <div className="input-container">
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
          <p>Forgot Password ?</p>
          <button type="submit" className="input-button">
            Sign In
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
