import React, { useEffect } from "react";
import Layout from "../../layouts/login-registration";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import {login, reset} from "../../redux/auth/authSlice"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  //The onchange function above does not pass in data correctly

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
        const { firstname, lastname } = res.data.message;
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
      })
      .catch((error) => {
        localStorage.clear();
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
