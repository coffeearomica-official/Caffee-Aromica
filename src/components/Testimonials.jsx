import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        name: 'Julian Thorne',
        role: 'Connoisseur',
        content: "The Midnight Velvet roast is a masterpiece. I've traveled to over 20 countries for coffee, and Caffee Aromica’s consistency and flavor profile are world-class.",
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=julian',
    },
    {
        name: 'Sofia Valero',
        role: 'Regular Patron',
        content: 'More than just a cafe, it’s my second home. The staff remembers my order, and the atmosphere is the perfect balance of chic and cozy.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=sofia',
    },
    {
        name: 'Marcus Kaine',
        role: 'Creative Director',
        content: 'As a visual storyteller, I appreciate the attention to detail here. Every corner is a frame, and every cup is a piece of art. Pure inspiration.',
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=marcus',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-white py-32">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Header Section */}
                    <div className="lg:w-1/3 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#6f4e37] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Voice of Lovers</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                                Reflections of <br />
                                <span className="italic text-secondary">Our Community</span>
                            </h2>
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                                ))}
                            </div>
                            <p className="text-lg text-text-dark/60 font-medium leading-relaxed mb-0">
                                Join thousands of satisfied guests who make us part of their daily story.
                            </p>
                        </motion.div>
                    </div>

                    {/* Slider Section */}
                    <div className="lg:w-2/3 w-full">
                        <Swiper
                            modules={[Pagination, Autoplay, EffectCreative]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            className="pb-20"
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-background p-12 rounded-[48px] relative h-full flex flex-col justify-between border border-primary/5 hover:border-secondary/20 transition-colors duration-500"
                                    >
                                        <div>
                                            <div className="text-secondary/20 mb-8">
                                                <Quote size={40} className="fill-current" />
                                            </div>
                                            <p className="text-xl font-serif text-primary italic leading-relaxed mb-12">
                                                "{review.content}"
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-5 border-t border-primary/5 pt-8">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-16 h-16 rounded-3xl overflow-hidden shadow-xl"
                                            >
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                            <div>
                                                <h4 className="text-lg font-bold text-primary">{review.name}</h4>
                                                <p className="text-[10px] text-secondary font-black uppercase tracking-widest">{review.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <style>{`
         .swiper-pagination-bullet { height: 2px; width: 30px; border-radius: 0; background: #4a2c2a !important; opacity: 0.1; }
         .swiper-pagination-bullet-active { background: #d4a373 !important; opacity: 1; }
      `}</style>
        </section>
    );
};

export default Testimonials;
