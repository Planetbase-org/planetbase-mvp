import React from "react";
import HeroSection from "../components/HeroSection/Hero";
import HomePage from "../layouts/landing-section";
import Subscribe from "../components/Subscribe/Subscribe";
import ModalVideo from "../components/Video/Video";

function Home() {
  return (
    <HomePage>
      <HeroSection />
      <ModalVideo />
      <Subscribe />
    </HomePage>
  );
}

export default Home;
