import React from "react";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import Layout from "../../layouts/signup-registation";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
// import { register, reset} from "../../redux/auth/authSlice"
// import { useDispatch, useSelector } from 'react-redux';

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [productUpdates, setProductUpdates] = useState(false);

  const { firstname, lastname, email, password, confirmPass } = formData;

  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  
    function onSubmit(e) {
      
      e.preventDefault();
      
    if (password !== confirmPass) {
      console.error("Passwords do not match");
    } else {
      Axios.post("https://planetbase-api.onrender.com/api/auth/signup", {
        firstname,
        lastname,
        email,
        password,
        productUpdates,
      })
        .then((res) => {
          console.log(res.data);
          const { firstname } = res.data.message;
          const { token } = res.data;
          localStorage.setItem("firstname", firstname);
          localStorage.setItem("token", token);
          navigate("/organizer");
        })
        .catch((error) => {
          localStorage.clear();
          console.error(error.message);
        });
    }
  }

  return (
    <Layout>
      <SignUpComponent header="Sign up to Planetbase.">
        <p className="signup-header">Let's setup an account for you</p>
      </SignUpComponent>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          value={firstname}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
          value={lastname}
          onChange={onChange}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="confirmPass"
          id="password2"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={onChange}
          required
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="productUpdates"
            id="productUpdates"
            defaultChecked={productUpdates}
            onChange={() => {
              setProductUpdates(!productUpdates);
              console.log(productUpdates);
            }}
          />
          <p>
            Send me product updates and marketing communications from Planetbase
          </p>
        </div>
        <button type="submit" className="input-button">
          Sign Up
        </button>
      </form>
    </Layout>
  );
}

export default SignUp;
