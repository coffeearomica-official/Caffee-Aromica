import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Coffee, Globe, TrendingUp, ShieldCheck, Users, Award,
    MapPin, IndianRupee, BookOpen, Headphones, CheckCircle,
    Target, Zap, Heart, Star, Phone, Mail, ArrowRight
} from 'lucide-react';
import './FranchisePage.css';

const Counter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && value) {
            let start = 0;
            const cleanValue = String(value).replace(/[+%]/g, '');
            const end = parseInt(cleanValue, 10);

            if (isNaN(end)) return;

            const totalUpdates = 50;
            const updateInterval = (duration * 1000) / totalUpdates;
            const increment = end / totalUpdates;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, updateInterval);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {count}
            {String(value).includes('%') ? '%' : ''}
            {String(value).includes('+') ? '+' : ''}
        </span>
    );
};

const FranchisePage = () => {
    const benefits = [
        {
            icon: Globe,
            title: 'Proven Business Model',
            description: 'Join a globally recognized brand with a track record of success. Our franchise model has been refined over years to ensure maximum profitability and customer satisfaction.'
        },
        {
            icon: TrendingUp,
            title: 'High ROI Potential',
            description: 'With our premium positioning and loyal customer base, franchisees typically see strong returns on investment within the first 18-24 months of operation.'
        },
        {
            icon: ShieldCheck,
            title: 'Comprehensive Training',
            description: 'We provide extensive training programs covering everything from coffee preparation to business management, ensuring you\'re fully equipped for success.'
        },
        {
            icon: Users,
            title: 'Marketing Support',
            description: 'Benefit from national marketing campaigns, social media support, and local marketing materials to help drive customers to your location.'
        },
        {
            icon: Award,
            title: 'Quality Products',
            description: 'Access to our premium coffee beans, exclusive recipes, and carefully curated menu items that keep customers coming back for more.'
        },
        {
            icon: Headphones,
            title: 'Ongoing Support',
            description: 'Our dedicated franchise support team is always available to help with operations, troubleshooting, and business growth strategies.'
        }
    ];

    const requirements = [
        {
            icon: IndianRupee,
            title: 'Investment Range',
            detail: '₹8 Lakhs - ₹20 Lakhs',
            description: 'Total investment including franchise fee, equipment, and initial inventory'
        },
        {
            icon: MapPin,
            title: 'Location',
            detail: '200-1,500 SQFT',
            description: 'High-traffic area with good visibility and accessibility'
        },
        {
            icon: Heart,
            title: 'Passion',
            detail: 'Coffee Enthusiast',
            description: 'Genuine love for coffee culture and customer service excellence'
        },
        {
            icon: Target,
            title: 'Experience',
            detail: 'Business Background',
            description: 'Prior business or management experience preferred but not required'
        }
    ];

    const process = [
        {
            step: '01',
            title: 'Initial Inquiry',
            description: 'Submit your franchise application through our online form or contact our franchise development team directly.'
        },
        {
            step: '02',
            title: 'Discovery Call',
            description: 'Have a detailed conversation with our team to discuss the opportunity, answer your questions, and assess mutual fit.'
        },
        {
            step: '03',
            title: 'Franchise Disclosure',
            description: 'Review our Franchise Disclosure Document (FDD) and financial information to make an informed decision.'
        },
        {
            step: '04',
            title: 'Meet the Team',
            description: 'Visit our headquarters, meet our leadership team, and experience our flagship location firsthand.'
        },
        {
            step: '05',
            title: 'Site Selection',
            description: 'Work with our real estate team to identify and secure the perfect location for your franchise.'
        },
        {
            step: '06',
            title: 'Training & Launch',
            description: 'Complete our comprehensive training program and prepare for your grand opening with full support from our team.'
        }
    ];

    const stats = [
        { value: '50+', label: 'Our Items' },
        { value: '100%', label: 'Customer Attraction' },
        { value: '98%', label: 'Franchisee Satisfaction' },
        { value: '45%', label: 'Average Annual ROI' }
    ];

    return (
        <div className="franchise-page">
            {/* Hero Section */}
            <section className="franchise-hero">
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hero-label"
                >
                    Franchise Opportunity
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Own Your Dream <br />
                    <span>Coffee Business</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Join the Caffee Aromica family and bring the finest coffee experience
                    to your community. We're looking for passionate entrepreneurs ready
                    to brew success.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/contact#contact-form" className="btn-primary">Apply for Franchise</Link>
                    <a href="#" className="btn-secondary">Download Brochure</a>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="stat-card text-center"
                            >
                                <div className="stat-number">
                                    <Counter value={stat.value} />
                                </div>
                                <p className="stat-label">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us">
                <div className="container mx-auto px-6">
                    <div className="section-header">
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">Franchise Benefits</h2>
                        <p className="section-desc">
                            When you partner with Caffee Aromica, you're not just buying a franchise –
                            you're joining a family committed to your success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="why-card h-full">
                                    <div className="why-icon">
                                        <benefit.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="requirements-section">
                <div className="container mx-auto px-6 max-w-[1100px]">
                    <div className="section-header">
                        <span className="section-label">Getting Started</span>
                        <h2 className="section-title">Franchise Requirements</h2>
                        <p className="section-desc">
                            We look for partners who share our passion for excellence. Here is what is required to join our exclusive network.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {requirements.map((req, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="req-card"
                            >
                                <div className="req-icon">
                                    <req.icon size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="req-title">{req.title}</h3>
                                <div className="req-value">{req.detail}</div>
                                <p className="req-desc">{req.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="section-header">
                        <h2 className="section-title">Comprehensive Support</h2>
                        <p className="section-desc">
                            From day one through your entire journey as a franchisee, our dedicated support team is here to ensure your success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: 'Training Programs', desc: '500+ hours of comprehensive training covering all aspects of operations.' },
                            { icon: Zap, title: 'Marketing Tools', desc: 'Access to national marketing campaigns and local store marketing toolkits.' },
                            { icon: Headphones, title: 'Ongoing Support', desc: 'Dedicated franchise consultant and 24/7 operational support hotline.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="why-card text-center" // Reusing why-card style for consistency
                            >
                                <div className="why-icon">
                                    <item.icon size={28} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="franchise-cta">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="section-title">Ready to Own a Caffee Aromica Franchise?</h2>
                    <p className="section-desc mb-8">
                        Partner with a fast-growing premium coffee brand and start your journey today.
                    </p>
                    <Link to="/contact#contact-form" className="btn-primary">Apply or Contact Us</Link>
                    <span className="cta-note">Limited franchise locations available for this quarter.</span>
                </motion.div>
            </section>
        </div>
    );
};

export default FranchisePage;
