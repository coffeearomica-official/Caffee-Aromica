import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const logoSrc = '/logo png.png';

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="footer-brand-heading">
                        <img src={logoSrc} alt="Caffee Aromica logo" className="footer-brand-logo" />
                        <h3>Caffee Aromica</h3>
                    </Link>
                    <p>
                        Crafting unforgettable coffee experiences with premium beans and
                        a passion for perfection. Your daily ritual, elevated.
                    </p>

                    <div className="footer-social">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/franchise">Franchise</Link>
                    <Link to="/about">Our Story</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                        Caffee Aromica<br />
                        Opp. to Cummins<br />
                        Balewadi High Street<br />
                        Pune, Maharashtra 411045
                    </p>
                    <p><a href="tel:+918055683334">+91 80556 83334</a></p>
                    <p><a href="mailto:hello@caffearomica.com">hello@caffearomica.com</a></p>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Caffee Aromica. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
