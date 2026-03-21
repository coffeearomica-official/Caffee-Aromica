import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Coffee, Heart } from 'lucide-react';

const features = [
    {
        icon: <Globe size={28} />,
        title: "Global Presence",
        badge: "150+ OUTLETS",
        desc: "Trusted by coffee lovers across Singapore, Australia, Dubai, and India. A world-class experience in every neighborhood."
    },
    {
        icon: <Coffee size={28} />,
        title: "Premium Coffee",
        badge: "100% PREMIUM",
        desc: "Ethically sourced arabica beans, roasted to perfection. We ensure a rich, consistent, and satisfying brew in every single cup."
    },
    {
        icon: <Heart size={28} />,
        title: "Perfect Blend",
        badge: "EXPERT CRAFTED",
        desc: "Mastering the art of coffee requires passion. Our expert baristas blend tradition with innovation for an unforgettable taste."
    }
];

const Features = () => {
    return (
        <section className="special-section relative overflow-hidden">
            {/* Background Watermark Illustration */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] opacity-[0.06] pointer-events-none z-0 transform rotate-[-10deg]">
                <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Simplified Cup Content for Background */}
                    <path d="M280 180C300 180 310 190 310 210C310 230 300 245 280 250" stroke="#4a2c2a" strokeWidth="12" strokeLinecap="round" />
                    <path d="M110 160 L140 270 C145 285 160 290 200 290 C240 290 255 285 260 270 L290 160" fill="#4a2c2a" />
                    <ellipse cx="200" cy="280" rx="110" ry="20" fill="#4a2c2a" />
                    {/* Steam */}
                    <path d="M170 120 Q180 100 170 80" stroke="#4a2c2a" strokeWidth="8" strokeLinecap="round" />
                    <path d="M200 110 Q190 90 200 70" stroke="#4a2c2a" strokeWidth="8" strokeLinecap="round" />
                    <path d="M230 115 Q240 95 230 75" stroke="#4a2c2a" strokeWidth="8" strokeLinecap="round" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Centered Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="feature-header-label inline-block"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-[#4a2c2a] mb-6"
                    >
                        What Makes Us <br />
                        <span className="italic relative inline-block">
                            Special
                            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#c8a46a] opacity-60 rounded-full"></span>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-[#555] leading-relaxed font-medium"
                    >
                        It’s not just coffee; it’s a culture. Here’s why thousands of customers make Caffee Aromica their daily ritual.
                    </motion.p>
                </div>

                {/* Centered Features List */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="feature-card group"
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <div className="feature-content flex-1">
                                <h3>
                                    {feature.title}
                                    <span className="feature-badge ml-auto md:ml-4">{feature.badge}</span>
                                </h3>
                                <p>{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
