import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coffee, Globe, TrendingUp, ShieldCheck } from 'lucide-react';

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

const Franchise = () => {
    return (
        <section id="franchise" className="relative py-32 bg-primary text-white overflow-hidden grad-coffee">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block"
                    >
                        Global Expansion
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif mb-8 text-white leading-tight"
                    >
                        Grow With Our <br />
                        <span className="italic text-secondary">Aromatic Legacy</span>
                    </motion.h2>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                        We are looking for passionate pioneers to join our global network. Own a Caffee Aromica and bring a premium coffee sanctuary to your community.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-2xl p-12 rounded-[40px] border border-white/10 group hover:border-secondary/50 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Scalable Model</h3>
                        <p className="text-white/40 mb-8 text-sm leading-relaxed">Our proven operational systems ensure a smooth start and sustainable growth in any market.</p>
                        <div className="text-4xl font-serif font-bold text-secondary">
                            <Counter value="12+" />
                        </div>
                        <p className="text-[10px] uppercase font-black text-white/20 tracking-widest mt-2">Active Regions</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-secondary p-12 rounded-[40px] text-primary shadow-[0_40px_80px_-20px_rgba(212,163,115,0.4)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Coffee size={200} />
                        </div>
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">High Returns</h3>
                        <p className="text-primary/60 mb-8 text-sm leading-relaxed">Join one of the fastest-growing industries with a brand that resonates with quality-conscious consumers.</p>
                        <div className="text-4xl font-serif font-bold text-primary">
                            <Counter value="40%" />
                        </div>
                        <p className="text-[10px] uppercase font-black text-primary/30 tracking-widest mt-2">Average Annual ROI</p>

                        <button className="mt-12 w-full bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform">
                            Apply Now
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-2xl p-12 rounded-[40px] border border-white/10 group hover:border-secondary/50 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Full Support</h3>
                        <p className="text-white/40 mb-8 text-sm leading-relaxed">From location sourcing to barista training, our dedicated specialists are with you at every step.</p>
                        <div className="text-4xl font-serif font-bold text-secondary">
                            <Counter value="500+" />
                        </div>
                        <p className="text-[10px] uppercase font-black text-white/20 tracking-widest mt-2">Training Hours</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Franchise;
