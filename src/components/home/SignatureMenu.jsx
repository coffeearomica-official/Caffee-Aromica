import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cappuccinoImg from '../../assets/images/cappuccino.png';
import coldBrewImg from '../../assets/images/cold_brew.png';
import caramelLatteImg from '../../assets/images/caramel_latte.png';

const SignatureMenu = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const items = [
        {
            name: "Classic Cappuccino",
            desc: "Rich espresso with steamed milk foam",
            img: cappuccinoImg
        },
        {
            name: "Signature Cold Brew",
            desc: "Smooth and bold slow-brewed coffee",
            img: coldBrewImg
        },
        {
            name: "Golden Caramel Latte",
            desc: "Premium caramel blended latte",
            img: caramelLatteImg
        }
    ];

    return (
        <section className="home-section h-signature">
            <div className="home-container">
                <motion.h2
                    className="home-section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    Our Signature Creations
                </motion.h2>

                <div className="h-menu-grid">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="h-menu-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <img src={item.img} alt={item.name} style={{ width: '100%', borderRadius: '16px', marginBottom: '20px' }} />
                            <h3 className="h-menu-card-title">{item.name}</h3>
                            <p className="h-menu-card-desc">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="h-menu-btn-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/menu" className="h-btn-solid">
                        Explore Full Menu
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SignatureMenu;
