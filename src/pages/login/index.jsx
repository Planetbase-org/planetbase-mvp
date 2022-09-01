import React from "react";
import Layout from "../../layouts/login-registration";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    Axios.post("https://planetbase-api.onrender.com/api/auth/login", {
      email,
      password,
    })
      .then((res) => {
        console.log(res.data);
        navigate("/organizer");
        localStorage.setItem("token", res.data.token);
        const { firstname, lastname } = res.data.organizer;
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
      })
      .catch((error) => {
        const { message } = error.response.data;
        console.error(message);
        setTimeout(() => {
          setError("");
        }, 5000);
        setError(message);
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
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <p>Forgot Password ?</p>
        <button type="submit" className="input-button">
          Sign In
        </button>
        <small>{error}</small>
      </form>
    </Layout>
  );
}

export default Login;
