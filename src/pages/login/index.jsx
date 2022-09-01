import React, { useEffect } from "react";
import Layout from "../../layouts/login-registration";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {login, reset} from "../../redux/auth/authSlice"

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error()
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) { 
    return ("Loading...")
  }
  
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  const onChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function onSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password
    }

    dispatch(login(userData))
    // Axios.post("https://planetbase-api.onrender.com/api/auth/login", {
    //   email,
    //   password,
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/organizer");
    //     localStorage.setItem("token", res.data.token);
    //     const { firstname, lastname } = res.data.organizer;
    //     localStorage.setItem("firstname", firstname);
    //     localStorage.setItem("lastname", lastname);
    //   })
    //   .catch((error) => {
    //     const { message } = error.response.data;
    //     console.error(message);
    //     setTimeout(() => {
    //       setError("");
    //     }, 5000);
    //     setError(message);
    //   });
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
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={onChange}
        />
        <p>Forgot Password ?</p>
        <button type="submit" className="input-button">
          Sign In
        </button>
        {/* <small>{error}</small> */}
      </form>
    </Layout>
  );
}

export default Login;
