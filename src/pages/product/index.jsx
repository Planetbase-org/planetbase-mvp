import React from "react";
import "./style.css";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Layout from "../../layouts/products-layout";
import Product1 from "../../assets/product.png";
import Product2 from "../../assets/product1.svg";
import Product3 from "../../assets/product2.svg";
import Subscribe from "../../components/Subscribe/Subscribe";
import ModalVideo from "../../components/Video/Video";
import Footer from "../../components/Footer/Footer";

function Product() {
  return (
    <Layout>
      <div className="product-section">
        <div className="product">
          <h4>What is the latest</h4>
          <div className="product-card">
            <h3>Monthly Brand Update</h3>
            <p>
              Read About Planetbase brand updates that help with audience
              engagement, data and insights, production quality, hybrid solution
              and more.....
            </p>
          </div>
          <h4>Agency</h4>
          <DetailsCard
            img={Product1}
            header="Integration"
            description="Connect planet base with your favorite applications and services"
          />
        </div>
        <hr className="line" />
        <div className="product-details">
          <h4>Product</h4>
          <DetailsCard
            img={Product2}
            header="Event Marketing"
            description="Promote beautifully landing pages that drives registration"
            />

          <DetailsCard
            img={Product3}
            header="Get Sponsors"
            description="Find events , sponsor events as well get your brand noticed."
          />
        </div>
      </div>
      {/* <ModalVideo /> */}
      <Subscribe />
      <Footer />
    </Layout>
  );
}

export default Product;
