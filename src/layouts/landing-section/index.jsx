import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";

function HomePage({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default HomePage;
