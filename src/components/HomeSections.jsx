import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Coffee, ArrowRight, Star } from 'lucide-react';

import cappuccinoImg from '../assets/images/cappuccino.png';
import coldBrewImg from '../assets/images/cold_brew.png';
import caramelLatteImg from '../assets/images/caramel_latte.png';
import coffeeCupImg from '../assets/images/coffee_cup.png';

const HomeSections = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const favorites = [
        {
            name: "Classic Cappuccino",
            desc: "Rich espresso with steamed milk foam.",
            img: cappuccinoImg,
            tag: "Best Seller"
        },
        {
            name: "Signature Cold Brew",
            desc: "Steeped for 18 hours for a smooth finish.",
            img: coldBrewImg,
            tag: "Favorite"
        },
        {
            name: "Golden Caramel Latte",
            desc: "Steamed milk with salted caramel syrup.",
            img: caramelLatteImg,
            tag: "Must Try"
        },
        {
            name: "Hazelnut Frappe",
            desc: "Iced blended coffee with roasted hazelnut.",
            img: coldBrewImg,
            tag: "New"
        },
        {
            name: "Mocha Truffle",
            desc: "Decadent chocolate fused with espresso.",
            img: coffeeCupImg,
            tag: "Rich"
        },
        {
            name: "Iced Americano",
            desc: "Double shot espresso over ice.",
            img: coldBrewImg,
            tag: ""
        },
        {
            name: "Vanilla Bean Latte",
            desc: "Sweet vanilla with velvet milk foam.",
            img: caramelLatteImg,
            tag: "Popular"
        },
        {
            name: "Espresso Macchiato",
            desc: "Espresso marked with a dollop of foam.",
            img: cappuccinoImg,
            tag: "Classic"
        }
    ];

    return (
        <div className="bg-white overflow-hidden">

            {/* SECTION: CUSTOMER LOVED MENU (Compact Grid) */}
            <section className="py-24 bg-[#faf8f5]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-12"
                    >
                        <span className="text-[#c8a46a] text-xs font-bold uppercase tracking-[2px] mb-3 block">
                            Customer Favorites
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#4a2c2a] mb-3">
                            Customer Loved Menu
                        </h2>
                        <p className="text-[#555] text-base font-light">
                            A selection of our most popular brews, crafted to perfection.
                        </p>
                    </motion.div>

                    <div className="menu-grid">
                        {favorites.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="menu-card"
                            >
                                <img src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                                {item.tag && <span className="tag">{item.tag}</span>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRAND STORY / PHILOSOPHY (Kept as intro) */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-serif text-[#4a2c2a] mb-8"
                    >
                        Our Coffee Philosophy
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-lg md:text-xl text-[#555] font-light leading-relaxed"
                    >
                        For us, coffee is more than a beverage—it is a ritual. A moment of pause in a busy world.
                        We believe in the sanctity of craftsmanship, treating every bean with reverence from the
                        farm to your cup. Our philosophy is simple: quality without compromise, brewed with
                        intention, served with grace.
                    </motion.p>
                </div>
            </section>

            {/* SECTION 1: SIGNATURE AMBIANCE */}
            <section className="py-24 bg-[#fbf9f6] relative">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 max-w-6xl">
                    <div className="flex-1 text-center md:text-left order-2 md:order-1">
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-[#c8a46a] text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
                        >
                            Signature Ambiance
                        </motion.span>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-4xl md:text-5xl font-serif text-[#4a2c2a] mb-8"
                        >
                            More Than Coffee — <br />
                            <span className="italic">It’s an Experience</span>
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="space-y-6 text-[#555] text-lg leading-relaxed font-light"
                        >
                            <p>
                                Whether it's the quiet start to your morning, a midday meeting of minds, or a
                                relaxed evening unwind, Caffee Aromica fits seamlessly into your rhythm.
                                We have designed our spaces to be your "third place"—a sanctuary outside of
                                home and work where thoughtful design meets the aroma of freshly ground beans.
                            </p>
                            <p>
                                Every detail, from the ambient lighting to the comfortable seating, is curated
                                to foster craft, creativity, and connection.
                            </p>

                            {/* Closing Line */}
                            <p className="text-[#4a2c2a] font-serif text-xl italic pt-4">
                                “Handcrafted. Balanced. Unforgettable.”
                            </p>
                        </motion.div>
                    </div>
                    {/* Visual Decor Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 flex justify-center order-1 md:order-2"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 border border-[#c8a46a]/30 rounded-full"></div>
                            <div className="absolute inset-4 border border-[#4a2c2a]/10 rounded-full"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Coffee size={64} className="text-[#c8a46a] opacity-80" strokeWidth={1} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: GLOBAL BRAND TRUST */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Globe className="w-10 h-10 text-[#c8a46a] mx-auto mb-6" strokeWidth={1.5} />
                        <h2 className="text-3xl md:text-4xl font-serif text-[#4a2c2a] mb-6">
                            A Global Coffee Brand You Can Trust
                        </h2>
                        <p className="text-[#555] text-lg font-light leading-relaxed mb-8">
                            From the bustling streets of India to the skylines of Dubai, Australia, and Singapore,
                            Caffee Aromica is a symbol of consistency and excellence. With over 150+ outlets worldwide,
                            we bring a premium, familiar experience to every neighborhood we serve.
                        </p>
                        <p className="text-[#555] text-lg font-medium">
                            Wherever you are, Caffee Aromica is home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: GROW WITH US */}
            <section className="py-24 bg-[#fbf9f6] border-t border-[#eaeaea]">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-[#4a2c2a] mb-6">
                            Grow With a Brand Built on Quality
                        </h2>
                        <p className="text-[#555] text-lg font-light leading-relaxed mb-10">
                            We are building more than just cafes; we are building legacies. Our growth is fueled by
                            partners who share our unwavering commitment to quality, hospitality, and community.
                            If you share our vision for the extraordinary, we invite you to join our journey.
                        </p>
                        <a href="/franchise" className="inline-flex items-center gap-2 text-[#4a2c2a] font-bold uppercase tracking-[2px] text-sm hover:text-[#c8a46a] transition-colors border-b border-[#4a2c2a]/30 pb-1 hover:border-[#c8a46a]">
                            Explore Franchise Opportunities <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default HomeSections;
