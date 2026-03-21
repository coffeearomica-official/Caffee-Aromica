import React, { useEffect } from "react";
import "./AboutPage.css";
import ownerImg from "../assets/images/web img Aromica Owner.png";

const AboutPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-wrapper">
            <div className="about-main-container">
                {/* HERO SECTION */}
                <section className="about-hero">
                    <p className="mini-title">OUR STORY</p>
                    <h1 className="about-title-main">About Caffee Aromica</h1>
                    <p className="about-subtitle-main">Crafted with passion. Served with purpose.</p>

                    <div className="story-text-block">
                        <p>
                            Caffee Aromica was born from a simple yet powerful belief — that great coffee is more
                            than a beverage; it is an experience. From carefully sourced premium beans to
                            thoughtfully designed café spaces, every detail reflects our commitment to quality,
                            consistency, and warmth.
                        </p>

                        <p>
                            What began as a passion for coffee has grown into a brand known for refined flavors,
                            genuine hospitality, and inviting spaces where people come together.
                        </p>
                    </div>
                </section>

                {/* VALUES SECTION */}
                <section className="about-values">
                    <div className="value-card">
                        <span className="value-icon">👁️</span>
                        <h2>Our Vision</h2>
                        <p>
                            To create a community-driven coffee brand that inspires connection, creativity, and
                            comfort — one cup at a time.
                        </p>
                    </div>

                    <div className="value-card">
                        <span className="value-icon">🎯</span>
                        <h2>Our Mission</h2>
                        <p>
                            To serve high-quality, handcrafted beverages in a warm and welcoming environment
                            while building meaningful relationships with our customers and partners.
                        </p>
                    </div>

                    <div className="value-card">
                        <span className="value-icon">💎</span>
                        <h2>Core Values</h2>
                        <ul className="values-list">
                            <li>Quality in every cup</li>
                            <li>Authentic flavors</li>
                            <li>Customer-first experience</li>
                            <li>Sustainable sourcing</li>
                            <li>Community connection</li>
                        </ul>
                    </div>
                </section>

                {/* TIMELINE SECTION */}
                <section className="timeline-section">
                    <h2 className="section-title">Our Journey</h2>
                    <div className="timeline-grid">
                        <div className="timeline-card">
                            <h3 className="timeline-year">Founded</h3>
                            <p>
                                Caffee Aromica started as a small café with a big dream — to serve soulful coffee.
                            </p>
                        </div>

                        <div className="timeline-card">
                            <h3 className="timeline-year">Growth</h3>
                            <p>
                                The brand expanded with better menus, aesthetics, and customer experience.
                            </p>
                        </div>

                        <div className="timeline-card">
                            <h3 className="timeline-year">Today</h3>
                            <p>
                                A recognized café brand delivering premium coffee experiences daily.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FOUNDER HERO SECTION */}
                <section className="founder-hero">
                    <div className="founder-split-card">
                        {/* LEFT IMAGE */}
                        <div className="founder-img-box">
                            <img
                                src={ownerImg}
                                alt="Anil Ghogare"
                                className="founder-big-img"
                            />
                            <div className="founder-name-overlay">
                                <h3>Anil Ghogare</h3>
                                <p>Founder & Director</p>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="founder-content-box">
                            <span className="vision-tag">VISIONARY LEADER</span>

                            <p className="founder-para">
                                With over 10+ years of experience in entrepreneurship and hospitality,
                                Anil Ghogare has been the driving force behind Caffee Aromica’s vision,
                                growth, and premium positioning.
                            </p>

                            <p className="founder-para">
                                His strategic mindset, passion for coffee culture, and customer-first
                                approach have helped shape Caffee Aromica into a brand known for quality,
                                warmth, and consistency.
                            </p>

                            {/* STATS ROW */}
                            <div className="founder-stats">
                                <div className="stat-item">
                                    <h4>10+</h4>
                                    <p>Years Exp</p>
                                </div>
                                <div className="stat-item">
                                    <h4>2 Lakh+</h4>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
