import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
    return (
        <section className="home-section h-experience">
            <div className="home-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="home-section-title">
                        More Than Coffee — <br />
                        <span style={{ fontStyle: 'italic', color: '#fdfaf5' }}>It’s an Experience</span>
                    </h2>
                    <p className="home-section-subtitle mx-auto text-xl" style={{ marginTop: '20px' }}>
                        Designed for comfort, creativity, and memorable moments.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
