import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Rahul Patil",
        role: "Regular Customer",
        review: "Best coffee in Balewadi. Amazing taste and premium ambience.",
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Sneha Joshi",
        role: "Working Professional",
        review: "Perfect place for meetings and work. Loved the cold brew.",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Amit Kulkarni",
        role: "Coffee Lover",
        review: "Top quality coffee and fast service. Highly recommended.",
        image: "https://i.pravatar.cc/150?img=60"
    },
    {
        name: "Priyanka Desai",
        role: "Freelancer",
        review: "The caramel latte is a masterpiece. And the Wi-Fi is super fast!",
        image: "https://i.pravatar.cc/150?img=42"
    },
    {
        name: "Vikram R.",
        role: "Local Guide",
        review: "A hidden gem in Pune. I visit every weekend for their signature brews.",
        image: "https://i.pravatar.cc/150?img=53"
    },
    {
        name: "Anjali Mehta",
        role: "Student",
        review: "Affordable premium coffee. The aesthetic is perfect for my Instagram.",
        image: "https://i.pravatar.cc/150?img=44"
    }
];

const Testimonials = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="home-section h-testimonials">
            <div className="home-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="home-section-title">What Our Customers Say</h2>
                    <p className="home-section-subtitle mx-auto">
                        Trusted by coffee lovers across Pune
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="h-test-slider-wrap"
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="h-test-swiper"
                        style={{ paddingBottom: '60px' }}
                    >
                        {testimonials.map((test, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-test-minimal-card" style={{ height: '100%' }}>
                                    <div className="h-test-stars">
                                        ★★★★★
                                    </div>
                                    <p className="h-test-review">"{test.review}"</p>

                                    <div className="h-test-user">
                                        <img src={test.image} alt={test.name} className="h-test-user-img" />
                                        <div className="h-test-user-info">
                                            <h4 className="h-test-name">{test.name}</h4>
                                            <p className="h-test-role">{test.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
