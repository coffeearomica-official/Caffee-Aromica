import React from 'react';
import heroBg from '../assets/images/hero_premium.png';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>

            <div className="hero-decorations">
                <div className="decor-item coffee-bean-1"></div>
                <div className="decor-item coffee-bean-2"></div>
                <div className="decor-item sparkle-1"></div>
                <div className="decor-item sparkle-2"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge-container">
                    <span className="hero-badge">
                        <span className="badge-dot"></span>
                        Rated #1 Specialty Cafe
                    </span>
                </div>

                <h1 className="hero-title">
                    Elegance In <br />
                    <span className="accent-text">Every Sip</span>
                </h1>

                <p className="hero-description">
                    Experience the artistry of artisanal roasts and hand-poured perfection.
                    Your sanctuary for refined tastes and quiet moments.
                </p>

                <div className="hero-actions">
                    <a href="/menu" className="btn btn-primary">
                        <span>Explore Our Menu</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                    <a href="/franchise" className="btn btn-outline">Franchise Opportunities</a>
                </div>
            </div>

        </section>
    );
};

export default Hero;