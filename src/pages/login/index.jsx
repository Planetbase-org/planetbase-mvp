import React, { useEffect } from "react";
import Layout from "../../layouts/login-registration";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function onSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    Axios.post("https://planetbase-api.onrender.com/api/auth/login", body)
      .then((res) => {
        console.log(res.data);
        navigate("/organizer");
        localStorage.setItem("token", res.data.token);
        const { firstname, lastname } = res.data.organizer;
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        setIsLoading(false);
      })
      .catch((error) => {
        // const { message } = error.response.data;
        console.error(error.response);
        const { message } = error.response.data;
        localStorage.clear();
        setTimeout(() => {
          setError("");
        }, 5000);
        setError(message);
        setIsLoading(false);
      });
  }

  return (
    <Layout>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handlePassword}
          required
        />
        {/* <p>Forgot Password ?</p> */}
        <button
          type="submit"
          className="input-button"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
        <small>{error}</small>
      </form>
    </Layout>
  );
}

export default Login;
