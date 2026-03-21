import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandAuthority from '../components/home/BrandAuthority';
import SignatureMenu from '../components/home/SignatureMenu';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ExperienceSection from '../components/home/ExperienceSection';
import Testimonials from '../components/home/Testimonials';
import OrderCTA from '../components/home/OrderCTA';
import LocationSection from '../components/home/LocationSection';
import './Home.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <BrandAuthority />
            <SignatureMenu />
            <WhyChooseUs />
            <ExperienceSection />
            <Testimonials />
            <OrderCTA />
            <LocationSection />
        </div>
    );
};

export default HomePage;
