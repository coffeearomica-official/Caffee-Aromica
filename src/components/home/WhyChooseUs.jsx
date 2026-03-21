import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Armchair, Smartphone } from 'lucide-react';

const WhyChooseUs = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const features = [
        {
            icon: <Coffee size={24} />,
            title: "Premium Beans",
            desc: "Ethically sourced arabica beans roasted to perfection."
        },
        {
            icon: <Award size={24} />,
            title: "Expert Baristas",
            desc: "Crafted by professionals who treat coffee as an art."
        },
        {
            icon: <Armchair size={24} />,
            title: "Comfortable Ambience",
            desc: "A beautifully curated space designed as your second home."
        },
        {
            icon: <Smartphone size={24} />,
            title: "Fast WhatsApp Ordering",
            desc: "Skip the line and order directly from your phone."
        }
    ];

    return (
        <section className="home-section h-why">
            <div className="home-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="home-section-title">Why Choose Us</h2>
                    <p className="home-section-subtitle mx-auto">
                        We don't just serve coffee — we serve an experience. Here's why our guests keep coming back.
                    </p>
                </motion.div>

                <div className="h-why-grid">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            className="h-feature"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="h-feature-icon">
                                {item.icon}
                            </div>
                            <div className="h-feature-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
