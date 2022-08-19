import React from 'react';
import HeroSection from '../components/HeroSection/Hero';
import Layout from '../layouts/landing-section';
import Subscribe from '../components/Subscribe/Subscribe';
import ModalVideo from '../components/Video/Video';

function Home() {
    return (
        <Layout>
            <HeroSection />
                <ModalVideo />
            <Subscribe/>
        </Layout>
    )
}

export default Home