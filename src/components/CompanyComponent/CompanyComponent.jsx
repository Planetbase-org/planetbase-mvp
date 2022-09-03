import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import Company1 from "../../assets/company1.svg";
import Company2 from "../../assets/company2.svg";
import Company3 from "../../assets/company3.svg";
import Company4 from "../../assets/company4.svg";
import Layout from "../../layouts/products-layout";

function CompanyComponent() {
  return (
    <Layout>
      <div className="product-section">
        <div className="product">
          <h4>What's New</h4>
          <div className="product-card">
            <h3 style={{textAlign: "center"}}>
                PlanetBase: A place you create events <br /> & sponsors comes in</h3>
            <p>
              Join thousands of Events Organizers put forth their Event on here
              and experience the ease,sponsors comes in to also put out their
              product.
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="product-details">
          <h4>Company</h4>
          <DetailsCard
            img={Company1}
            header="Why PlanetBase"
            description="Learn the benefits of creating your Events on  PlanetBase"
          />
          <DetailsCard
            img={Company2}
            header="About Us"
            description="See How we are  Re-imaging Events"
          />
          <DetailsCard
            img={Company3}
            header="Careers"
            description="If you love solving big challenges,  let's chat...."
          />
          <DetailsCard
            img={Company4}
            header="Our Mission"
            description="Learn what fuels the planetbase engine"
          />
        </div>
      </div>
    </Layout>
  );
}

export default CompanyComponent;
