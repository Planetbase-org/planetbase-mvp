import React from 'react';
import HeroSection from '../components/HeroSection/Hero';
import Layout from '../layouts/landing-section';
import Subscribe from '../components/Subscribe/Subscribe';

function Home() {
    return (
        <Layout>
            <HeroSection />
            <Subscribe/>
        </Layout>
    )
}

export default Home