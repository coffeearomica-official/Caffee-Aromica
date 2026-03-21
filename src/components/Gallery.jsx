import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Instagram } from 'lucide-react';

import img1 from '../assets/images/hero_bg.png';
import img2 from '../assets/images/coffee_cup.png';
import img3 from '../assets/images/cappuccino.png';
import img4 from '../assets/images/caramel_latte.png';
import img5 from '../assets/images/cold_brew.png';
import img6 from '../assets/images/coffee_bean.png';

const images = [
    { id: 1, src: img1, title: 'Artisan Extraction', category: 'Roastery' },
    { id: 2, src: img2, title: 'Golden Hour', category: 'Ambiance' },
    { id: 3, src: img3, title: 'Velvet Pour', category: 'Handcrafted' },
    { id: 4, src: img4, title: 'Sweet Contrast', category: 'Seasonal' },
    { id: 5, src: img5, title: 'Cold Essence', category: 'Cold Brew' },
    { id: 6, src: img6, title: 'Prime Selection', category: 'Beans' },
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="gallery" className="bg-[#fdfaf5] py-32">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-4 block"
                        >
                            Visual Stories
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-primary leading-tight"
                        >
                            The <span className="italic text-secondary">Aromica</span> Lens
                        </motion.h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-xl text-[10px] uppercase font-black tracking-widest text-primary border border-primary/5"
                    >
                        <Instagram size={18} />
                        Follow Our Journey
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-[40px] cursor-pointer shadow-xl ${index % 4 === 1 ? 'md:row-span-2' : ''
                                }`}
                            onClick={() => setSelectedImg(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                            />

                            {/* Refined Hover Overlay */}
                            <div className="absolute inset-x-4 bottom-4 z-20">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[28px] translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-[9px] uppercase tracking-widest text-[#d4a373] font-bold mb-1 block">{img.category}</span>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-serif text-white font-bold">{img.title}</h3>
                                        <ZoomIn className="text-white/60" size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-8 lg:p-20"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-10 right-10 text-white hover:text-secondary transition-all hover:rotate-90">
                            <X size={48} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                className="max-w-full max-h-[80vh] rounded-[40px] shadow-2xl object-contain border border-white/10"
                            />
                            <div className="mt-10 text-center">
                                <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4 block">{selectedImg.category}</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-white">{selectedImg.title}</h2>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
