import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="about-page">

            {/* SECTION: ABOUT INTRO */}
            <section className="about-section">
                <div className="about-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h1>About Caffee Aromica</h1>
                        <p className="subtitle">Crafted with passion. Served with purpose.</p>

                        <p>
                            Caffee Aromica was founded with a simple belief — great coffee is more than a beverage;
                            it is an experience. From carefully sourced premium beans to thoughtfully designed
                            café spaces, every detail reflects our commitment to quality, consistency, and culture.
                        </p>

                        <p>
                            What began as a passion for coffee has evolved into a growing brand known for refined
                            flavors, warm hospitality, and inviting spaces where people come together. Whether it’s
                            a quiet morning ritual or a meaningful conversation, Caffee Aromica is designed to feel
                            like your perfect pause.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: VISION & MISSION (SOFT SECTION) */}
            <section className="soft-section">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-section">
                            <h3>Our Vision</h3>
                            <p>
                                At Caffee Aromica, our vision is to become a globally admired café brand that blends
                                exceptional coffee with meaningful human experiences. We aim to create spaces where
                                people feel inspired, welcomed, and connected—one cup at a time.
                            </p>
                            <p>
                                We envision our cafés as modern sanctuaries—places where creativity flows,
                                conversations matter, and quality is never compromised.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-section">
                            <h3>Our Mission</h3>
                            <p>
                                Our mission is simple yet powerful: to serve thoughtfully crafted coffee using
                                premium ingredients while building a culture rooted in trust, hospitality, and excellence.
                            </p>
                            <p>
                                From sourcing the finest beans to training skilled baristas and designing inviting
                                spaces, every decision is driven by our commitment to quality.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: FOUNDER */}
            <section>
                <div className="container mx-auto px-6">
                    <motion.div
                        className="founder-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="founder-img">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                alt="Anil Ghogare"
                            />
                        </div>
                        <div className="founder-info">
                            <p className="founder-tag">FOUNDER & DIRECTOR</p>
                            <h3 className="founder-name">Anil Ghogare</h3>
                            <div className="founder-text">
                                <p>
                                    Caffee Aromica is led by Anil Ghogare, Founder & Director, whose vision focuses on
                                    building a sustainable, quality-driven café brand rooted in trust and hospitality.
                                </p>
                                <p>
                                    With a strong entrepreneurial mindset and deep appreciation for café culture, he
                                    has guided the brand’s growth with clarity, consistency, and long-term purpose.
                                </p>
                            </div>
                            <div className="founder-quote">
                                “Quality is not a feature — it’s a promise we keep every day.”
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: CORE VALUES (SOFT SECTION) */}
            <section className="soft-section">
                <div className="container mx-auto px-6">
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="section-title"
                    >
                        Our Core Values
                    </motion.h3>
                    <div className="values-grid">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="value-card">
                            <h4>Heritage</h4>
                            <p>Rooted in deep coffee traditions while embracing modern craftsmanship to deliver excellence.</p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="value-card">
                            <h4>Quality</h4>
                            <p>Only the finest Arabica beans, ethically sourced and roasted with precision to unlock character.</p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="value-card">
                            <h4>Community</h4>
                            <p>Creating warm, inclusive spaces that foster connections and make every guest feel at home.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: WHAT SETS US APART */}
            <section>
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-section">
                        <h3>What Sets Us Apart</h3>
                        <p>• Premium Arabica beans ethically sourced and expertly roasted</p>
                        <p>• Consistency in taste, service, and ambiance across all locations</p>
                        <p>• Thoughtfully designed café spaces for comfort and elegance</p>
                        <p>• Customer-first service philosophy</p>
                        <p>• Sustainable and scalable growth model</p>
                    </motion.div>
                </div>
            </section>

            {/* CLOSING STATEMENT */}
            <section className="soft-section pb-32">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-section">
                        <h3>A Brand Built to Last</h3>
                        <p className="italic">
                            Caffee Aromica is built on craftsmanship, culture, and care.
                            Every cup we serve carries our promise of quality, warmth, and intention.
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
