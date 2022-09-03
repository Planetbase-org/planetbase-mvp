import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import Product1 from "../../assets/product-icon1.svg";
import Product2 from "../../assets/product-icon2.svg";
import Product3 from "../../assets/product-icon3.svg";
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
            img={Product2}
            header="Integration"
            description="Connect planet base with your favorite applications and services"
          />
          <DetailsCard
            img={Product3}
            header="Integration"
            description="Connect planet base with your favorite applications and services"
          />
          <DetailsCard
            img={Product3}
            header="Integration"
            description="Connect planet base with your favorite applications and services"
          />
          <DetailsCard
            img={Product3}
            header="Integration"
            description="Connect planet base with your favorite applications and services"
          />
        </div>
      </div>
    </Layout>
  );
}

export default CompanyComponent;
