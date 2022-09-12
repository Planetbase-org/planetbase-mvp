import React from "react";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import Layout from "../../layouts/signup-registation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [productUpdates, setProductUpdates] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { firstname, lastname, email, password, confirmPass } = formData;
  const [error, setError] = useState(null);
  const [togglePass, setTogglePass] = useState(false);
  const togglePassFunc = () => {
    setTogglePass(!togglePass);
  };

  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    setIsLoading(true);
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
          setIsLoading(false);
          navigate("/organizer");
        })
        .catch((error) => {
          localStorage.clear();
          const { message } = error.response.data;
          console.error(message);
          setTimeout(() => {
            setError(null);
          }, 7000);
          setError(message);
          setIsLoading(false);
        });
    }
  }

  return (
    <Layout>
      <SignUpComponent header="Sign up to Planetbase.">
        <p className="signup-header">Let's setup an account for you</p>
        <p style={{ textAlign: "center" }}>
          Already Have an Account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#0F255F" }}
          >
            Login
          </Link>
        </p>
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
          type={togglePass ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={onChange}
          required
        />
        {/* <span
          style={{
            position: "relative",
            top: "2.5rem",
            left: "10rem",
            color: "grey",
          }}
        >
          <FaEye />
        </span> */}
        <input
          type={togglePass ? "text" : "password"}
          name="confirmPass"
          id="password2"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={onChange}
          required
        />
        <small
        className="password-notification"
          style={{
            fontSize: "11px",
            textAlign: "center",
            marginLeft: "3rem",
            marginRight: "3rem",
          }}
        >
          Passwords must contain at least 8 characters, <br />
          and must have at least one capital, one lower-case letter (Aa-Zz),{" "}
          <br />
          one special symbol (#, &, % etc), and one number (0-9)
        </small>
        <small
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={togglePassFunc}
        >
          {togglePass ? "Hide" : "Show"} Password
        </small>
        {error && (
          <small
            style={{ color: "red", marginLeft: "7rem", marginRight: "7rem" }}
          >
            {error}
          </small>
        )}
        <div className="checkbox-container"
        style={{marginLeft: "3rem", marginRight: "3rem" }}
        >
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
        <button
          type="submit"
          className="input-button"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </Layout>
  );
}

export default SignUp;
