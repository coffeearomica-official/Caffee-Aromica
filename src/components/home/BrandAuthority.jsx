import React from 'react';
import { motion } from 'framer-motion';

const BrandAuthority = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="home-section h-authority">
            <div className="home-container">
                <motion.h2
                    className="home-section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    One of Pune&apos;s Most <br />
                    <em>Loved Coffee Destinations</em>
                </motion.h2>
                <motion.p
                    className="home-section-subtitle mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    At Caffee Aromica, coffee is more than a drink &mdash; it&apos;s a craft. Every cup is brewed with precision and passion.
                </motion.p>

                <div className="h-stats-grid">
                    {[
                        { val: "1 Lac+", lbl: "Happy Customers" },
                        { val: "5 Lac+", lbl: "Cups Served" },
                        { val: "4.8", lbl: "Star Rating" },
                        { val: "Premium", lbl: "Quality Beans" }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            className="h-stat-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="h-stat-value">{s.val}</span>
                            <span className="h-stat-label">{s.lbl}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandAuthority;
