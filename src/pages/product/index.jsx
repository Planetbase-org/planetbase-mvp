import React from 'react';
import "./style.css";
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import Layout from '../../layouts/products-layout';
import Product1 from '../../assets/product-icon1.svg';
import Product2 from '../../assets/product-icon2.svg';
import Product3 from '../../assets/product-icon3.svg';

function Product() {

    return (
        <Layout>
            <div className="product-section">
                <div className="product">
                    <h4>What is the latest</h4>
                    <div className="product-card">
                        <h3>Monthly Brand Update</h3>
                        <p>Read About Planetbase brand  updates that help
                            with audience engagement, data and insights,
                            production quality, hybrid solution and more.....</p>
                    </div>
                    <h4>Agency</h4>
                    <DetailsCard
                        img={Product1}
                        header="Integration"
                        description="Connect planet base with your favorite applications and services"
                    />
                </div><hr className='line'/>
                <div className="product-details">
                    <h4>Product</h4>
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
                </div>
            </div>
        </Layout>
    )
}

export default Product;