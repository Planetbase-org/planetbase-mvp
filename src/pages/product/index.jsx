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
                <div>
                    <h4>What is the latest</h4>
                    <div>
                        <h4>Monthly Brand Update</h4>
                        <p>Read About Planetbase brand  updates that help
                            with audience engagement, data and insights,
                            production quality, hybrid solution and more.....</p>
                    </div>
                    <DetailsCard
                        img={Product1}
                        header="Integration"
                        description="Connect planet base with your favorite applications and services"
                    />
                </div>
                <div className="product">
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