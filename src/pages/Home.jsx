import React from 'react';
import HeroSection from '../components/HeroSection/Hero';
import Navbar from '../components/NavBar/Navbar';
import Layout from '../layouts/landing-section';

function Home() {
    return (
        <Layout>
            <HeroSection/>
        </Layout>
    )
}

export default Home