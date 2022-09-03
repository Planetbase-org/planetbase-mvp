import React from "react";
import "./style.css";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Layout from "../../layouts/products-layout";
import Product1 from "../../assets/product-icon1.svg";
import Product2 from "../../assets/product-icon2.svg";
import Product3 from "../../assets/product-icon3.svg";
import Product4 from "../../assets/product-icon4.svg";
import Subscribe from "../../components/Subscribe/Subscribe";
import ModalVideo from "../../components/Video/Video";
import Footer from "../../components/Footer/Footer";

function Solution() {
  return (
    <Layout>
      <div className="solution-layout">
        <h4>What is the Latest</h4>
        <div className="event-card">
          <h3>2022 Guide to all Events</h3>
          <p className="event-text">
            Planetbase 2022 guide to best-in-class Events, what they are, why
            they are important and how to ensure they are successful.
          </p>
        </div>
        <h4>Event Type</h4>
        <div className="events">
          <DetailsCard
            img={Product1}
            header="Virtual Event"
            description="Promote beautifully landing pages that drives registration"
          />
          <DetailsCard
            img={Product2}
            header="In-person Events"
            description="Create incredible experiences for your digital audience"
          />
        </div>
        <div className="events">
          <DetailsCard
            img={Product3}
            header="hybrid Events"
            description="Manage in-person attendee and exhibit engagement"
          />
          <DetailsCard
            img={Product4}
            header="Internal Events"
            description="Produce professional, high -quality streams with ease"
          />
        </div>
      </div>
      <ModalVideo />
      <Subscribe />
      <Footer />
    </Layout>
  );
}

export default Solution;
