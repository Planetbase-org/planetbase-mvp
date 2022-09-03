import React from "react";
import CompanyComponent from "../../components/CompanyComponent/CompanyComponent";
import Footer from "../../components/Footer/Footer";
import Subscribe from '../../components/Subscribe/Subscribe';
import ModalVideo from '../../components/Video/Video';

function Company() {
  return (
    <div>
      <CompanyComponent />
      <ModalVideo />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Company;
