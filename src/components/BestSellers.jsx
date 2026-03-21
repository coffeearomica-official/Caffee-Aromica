import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import img1 from '../assets/images/cappuccino.png';
import img2 from '../assets/images/caramel_latte.png';
import img3 from '../assets/images/cold_brew.png';
import img4 from '../assets/images/coffee_cup.png';

const bestSellers = [
    {
        name: 'The Classic Pour',
        price: '$5.50',
        image: img1,
        note: "Crafted with 100% Arabica beans from the Ethiopian Highlands."
    },
    {
        name: 'Sun-Kissed Latte',
        price: '$6.25',
        image: img2,
        note: "Infused with organic honey and a hint of Madagascar vanilla."
    },
    {
        name: 'Eclipse Cold Brew',
        price: '$5.00',
        image: img3,
        note: "Triple-filtered and nitrogen-infused for a creamy texture."
    },
    {
        name: 'Elysian Mocha',
        price: '$5.75',
        image: img4,
        note: "Rich Belgian chocolate melted into our signature roast."
    },
];

const BestSellers = () => {
    return (
        <section id="best-sellers" className="bg-[#f7f1e3] py-32">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Content Side */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Crowd Favorites</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-none">
                                The Daily <br />
                                <span className="italic text-secondary">Aromica Ritual</span>
                            </h2>
                            <p className="text-lg text-text-dark/70 mb-12 max-w-lg leading-relaxed font-medium">
                                Every month, our community votes on their favorite brew. Discover why these signatures have become a staple for coffee lovers across the city.
                            </p>

                            <div className="flex gap-12 border-t border-primary/5 pt-12">
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-primary mb-1">98%</h4>
                                    <p className="text-[10px] uppercase font-black text-text-dark/40 tracking-widest">Satisfaction</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-primary mb-1">50k+</h4>
                                    <p className="text-[10px] uppercase font-black text-text-dark/40 tracking-widest">Cups Served</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Slider Side */}
                    <div className="flex-1 w-full overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                className="w-full"
                            >
                                {bestSellers.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative group bg-white p-6 rounded-[40px] shadow-2xl overflow-hidden border border-primary/5">
                                            <div className="relative aspect-square rounded-[32px] overflow-hidden mb-8">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="text-center px-4 mb-4">
                                                <h3 className="text-3xl font-serif text-primary mb-2 italic">{item.name}</h3>
                                                <p className="text-sm text-text-dark/50 font-medium mb-6">
                                                    {item.note}
                                                </p>
                                                <div className="inline-flex items-center gap-4 bg-primary text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                                                    Taste Now • {item.price}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </div>

                </div>
            </div>

            <style>{`
        .swiper-pagination-bullet { width: 12px; height: 12px; background: #4a2c2a !important; opacity: 0.1; transition: all 0.3s ease; }
        .swiper-pagination-bullet-active { width: 30px; border-radius: 10px; opacity: 1; }
      `}</style>
        </section>
    );
};

export default BestSellers;
