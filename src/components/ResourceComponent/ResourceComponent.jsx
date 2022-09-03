import React from 'react'
import DetailsCard from '../DetailsCard/DetailsCard';
import Product1 from "../../assets/product-icon1.svg";
import Product2 from "../../assets/product-icon2.svg";
import Product3 from "../../assets/product-icon3.svg";
import Layout from '../../layouts/products-layout';

function ResourceComponent() {
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
            header="Case Study"
            description="See How Planet Base helps Teams achieve their even goals"
          />
        </div>
        <hr className="line" />
        <div className="product-details">
          <h4>Product</h4>
          <DetailsCard
            img={Product2}
            header="Blog"
            description="Learn the latest practices &  stay ahead of the industry"
          />
          <DetailsCard
            img={Product3}
            header="Support"
            description="Need a hand? lets get your answers to your questions"
          />
        </div>
      </div>
    </Layout>
  )
}

export default ResourceComponent