import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import coffeeHeroImg from '../../assets/images/hero_premium.png';

const HeroSection = () => {
    return (
        <section className="h-hero">
            <div className="h-hero-shell">
                <motion.div
                    className="h-hero-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <p className="h-hero-kicker">Premium Coffee Experience</p>
                    <h1>
                        Pune&apos;s Destination for <em>Exceptional Coffee</em>
                    </h1>
                    <p className="h-hero-copy">
                        Fresh coffee, shakes and refreshing mocktails made with premium ingredients.
                    </p>

                    <div className="h-hero-btns">
                        <Link to="/menu" className="h-btn-outline">
                            Explore Menu
                        </Link>
                        <button
                            className="h-btn-solid"
                            onClick={() => window.dispatchEvent(new Event('openOrderModal'))}
                        >
                            Order Now
                        </button>
                    </div>

                    <div className="h-rating-badge" aria-label="Customer rating">
                        <span className="h-rating-star" aria-hidden="true">★</span>
                        <span>4.9 Rating | 500+ Happy Customers</span>
                    </div>
                </motion.div>

                <motion.div
                    className="h-hero-right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.85, delay: 0.12 }}
                >
                    <motion.div
                        className="h-hero-media-card"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img
                            src={coffeeHeroImg}
                            alt="Coffee preparation at Caffee Aromica"
                            className="h-hero-media"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
