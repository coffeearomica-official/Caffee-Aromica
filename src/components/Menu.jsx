import React from 'react';
import { motion } from 'framer-motion';
import cappuccino from '../assets/images/cappuccino.png';
import coldBrew from '../assets/images/cold_brew.png';
import caramelLatte from '../assets/images/caramel_latte.png';
import coffeeCup from '../assets/images/coffee_cup.png';
import coffeeBean from '../assets/images/coffee_bean.png';

const menuCategories = [
    {
        image: cappuccino,
        title: "Hot Coffee",
        desc: "Expertly brewed espresso, lattes, cappuccinos, and signature hot beverages"
    },
    {
        image: coldBrew,
        title: "Cold Coffee",
        desc: "Refreshing iced coffees, cold brews, and frozen specialties"
    },
    {
        image: caramelLatte,
        title: "Desserts & Beverages",
        desc: "Sweet treats, fresh juices, smoothies, and specialty drinks"
    },
    {
        image: coffeeCup,
        title: "Pizza & Pasta",
        desc: "Authentic Italian favorites with fresh ingredients and bold flavors"
    },
    {
        image: coffeeBean,
        title: "Appetizers",
        desc: "Perfect starters and small bites to complement your coffee"
    },
    {
        image: cappuccino,
        title: "Burger & Sandwiches",
        desc: "Gourmet burgers and artisan sandwiches made to perfection"
    },
    {
        image: caramelLatte,
        title: "Combos",
        desc: "Value-packed combinations of your favorite items"
    }
];

const Menu = () => {
    return (
        <section id="menu" className="bg-[#e6ddd0] py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-8 py-3 rounded-full bg-[#d4a373]/20 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8"
                    >
                        Delicious Offerings
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-tight"
                    >
                        Our <span className="text-primary-light italic">Menu</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-text-dark/60 max-w-3xl mx-auto leading-relaxed font-medium mb-8"
                    >
                        Discover our carefully curated selection of premium coffee, delicious food, and refreshing beverages crafted with the finest ingredients and expert techniques.
                    </motion.p>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-24 h-[2px] bg-primary/20"></div>
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <div className="w-24 h-[2px] bg-primary/20"></div>
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {menuCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="mb-6 overflow-hidden rounded-[20px] bg-[#f5f5f5] aspect-square flex items-center justify-center">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-text-dark/60 leading-relaxed font-medium">
                                    {category.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
