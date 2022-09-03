import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import Resource1 from "../../assets/resources1.svg";
import Resource2 from "../../assets/resources2.svg";
import Resource3 from "../../assets/resources3.svg";
import Layout from "../../layouts/products-layout";

function ResourceComponent() {
  return (
    <Layout>
      <div className="product-section">
        <div className="product">
          <h4>What is the latest</h4>
          <div className="product-card">
            <h3>2022 Event Planning Toolkit</h3>
            <p>
              download our Event Budget, event Brief, and Run of show templates
              to make planning your in-person, hybrid and virtual events easy.
              save time, stay organized and feel confident you and your team are
              on the right track.
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="product-details">
          <h4>Resources</h4>
          <DetailsCard
            img={Resource1}
            header="Case Study"
            description="See How Planet Base helps Teams achieve their even goals"
          />
          <DetailsCard
            img={Resource2}
            header="Blog"
            description="Learn the latest practices &  stay ahead of the industry"
          />
          <DetailsCard
            img={Resource3}
            header="Support"
            description="Need a hand? lets get your answers to your questions"
          />
        </div>
      </div>
    </Layout>
  );
}

export default ResourceComponent;
