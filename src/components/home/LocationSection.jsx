import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../../constants';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationSection = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };


    return (
        <section className="home-section h-location">
            <div className="home-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="home-section-title">Visit Us</h2>
                    <p className="home-section-subtitle mx-auto">
                        We are located in the heart of Pune. Drop by for a perfect cup of coffee.
                    </p>
                </motion.div>

                <div className="h-loc-elegant-grid">
                    <motion.div
                        className="h-loc-elegant-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="h-loc-icon-wrapper">
                            <MapPin size={24} />
                        </div>
                        <h4>Our Location</h4>
                        <p>
                            Caffee Aromica<br />
                            Opp. to Cummins, Balewadi High Street<br />
                            Pune, Maharashtra 411045
                        </p>
                    </motion.div>

                    <motion.div
                        className="h-loc-elegant-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-loc-icon-wrapper">
                            <Clock size={24} />
                        </div>
                        <h4>Opening Hours</h4>
                        <p>
                            Monday - Sunday<br />
                            8:00 AM to 3:00 AM<br />
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#d4a373', marginTop: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>Open All Days</span>
                        </p>
                    </motion.div>

                    <motion.div
                        className="h-loc-elegant-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="h-loc-icon-wrapper">
                            <Phone size={24} />
                        </div>
                        <h4>Contact</h4>
                        <p style={{ marginBottom: '16px' }}>
                            +91 {WHATSAPP_NUMBER.replace(/^91/, '')}<br />
                            hello@caffearomica.com
                        </p>


                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default LocationSection;
