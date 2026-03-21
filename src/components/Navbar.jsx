import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import OrderModal from './OrderModal';

const Navbar = () => {
    const logoSrc = '/logo png.png';
    const [isOpen, setIsOpen] = useState(false);
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const openOrder = () => { setIsOrderOpen(true); setIsOpen(false); };
    const closeOrder = () => setIsOrderOpen(false);
    const handleNavClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    useEffect(() => {
        const handleOpenOrder = () => openOrder();
        window.addEventListener('openOrderModal', handleOpenOrder);
        return () => window.removeEventListener('openOrderModal', handleOpenOrder);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Menu', href: '/menu' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => location.pathname === href;

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 50,
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: scrolled
                        ? 'rgba(255, 255, 255, 0.98)'
                        : 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: scrolled
                        ? '1px solid rgba(0, 0, 0, 0.16)'
                        : '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: scrolled
                        ? '0 10px 30px rgba(0, 0, 0, 0.08)'
                        : '0 6px 20px rgba(0, 0, 0, 0.05)',
                    padding: scrolled ? '12px 0' : '18px 0',
                }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Branding */}
                    <Link to="/" onClick={handleNavClick} style={{ textDecoration: 'none' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img
                                src={logoSrc}
                                alt="Caffee Aromica logo"
                                style={{
                                    width: 'clamp(32px, 8vw, 42px)',
                                    height: 'clamp(32px, 8vw, 42px)',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                            />
                            <span style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(1.05rem, 4.8vw, 1.45rem)',
                                fontWeight: 700,
                                color: '#000000',
                                letterSpacing: '-0.01em',
                            }}>
                                Caffee Aromica
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div style={{ alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={handleNavClick}
                                style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: isActive(link.href) ? '#000000' : '#111111',
                                    textDecoration: 'none',
                                    letterSpacing: '0.02em',
                                    transition: 'color 0.3s ease',
                                    position: 'relative',
                                    paddingBottom: '2px',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = '#000000'}
                                onMouseLeave={e => e.currentTarget.style.color = isActive(link.href) ? '#000000' : '#111111'}
                            >
                                {link.name}
                                {isActive(link.href) && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: -2,
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'linear-gradient(90deg, transparent, #000000, transparent)',
                                    }} />
                                )}
                            </Link>
                        ))}

                        {/* Desktop ORDER NOW */}
                        <button
                            type="button"
                            id="navbar-order-btn"
                            className="btn-attractive"
                            onClick={openOrder}
                        >
                            Order Now
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        style={{ color: '#000000', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.99)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                paddingTop: '24px',
                                paddingBottom: '32px',
                                paddingLeft: '24px',
                                paddingRight: '24px',
                            }}
                            className="md:hidden"
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', alignItems: 'center' }}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={handleNavClick}
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            color: isActive(link.href) ? '#000000' : '#111111',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* Mobile ORDER NOW */}
                                <button
                                    type="button"
                                    id="navbar-order-btn-mobile"
                                    className="btn-attractive"
                                    onClick={openOrder}
                                    style={{ marginTop: '8px' }}
                                >
                                    Order Now
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Order Modal */}
            {isOrderOpen && <OrderModal onClose={closeOrder} />}
        </>
    );
};

export default Navbar;
