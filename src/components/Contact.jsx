import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Phone, Mail, MapPin, Instagram, Facebook, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-primary text-white pt-32 pb-12 grad-coffee relative overflow-hidden">
            {/* Decorative Branding Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
                CAFFEE AROMICA
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 mb-32">

                    {/* Info Side */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Get In Touch</span>
                            <h2 className="text-6xl md:text-8xl font-serif mb-12 text-white leading-[0.9]">
                                Let's Start a <br />
                                <span className="italic text-secondary">Conversation</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-secondary font-black uppercase tracking-widest text-[10px] mb-4">Visit Us</h4>
                                    <p className="text-lg font-medium text-white/60 mb-2">Opp. to Cummins, Balewadi High Street</p>
                                    <p className="text-lg font-medium text-white/60">Pune, Maharashtra 411045</p>
                                </div>
                                <div>
                                    <h4 className="text-secondary font-black uppercase tracking-widest text-[10px] mb-4">Reach Out</h4>
                                    <p className="text-lg font-medium text-white/60 mb-2">hello@caffearomica.com</p>
                                    <p className="text-lg font-medium text-white/60">+91 80556 83334</p>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="flex gap-10 mt-20">
                                {[
                                    { name: 'Instagram', icon: <Instagram size={20} /> },
                                    { name: 'Facebook', icon: <Facebook size={20} /> },
                                    { name: 'Twitter', icon: <Twitter size={20} /> }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ scale: 1.1, color: '#d4a373' }}
                                        className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest group"
                                    >
                                        {social.icon}
                                        <span className="hidden sm:block">{social.name}</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-16 rounded-[60px]"
                        >
                            <form className="flex flex-col gap-10">
                                <div className="border-b border-white/10 pb-4 group focus-within:border-secondary transition-colors">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2 block">Your Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. Julian Thorne"
                                        className="bg-transparent w-full text-xl font-medium outline-none text-white placeholder:text-white/10"
                                    />
                                </div>

                                <div className="border-b border-white/10 pb-4 group focus-within:border-secondary transition-colors">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2 block">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="hello@example.com"
                                        className="bg-transparent w-full text-xl font-medium outline-none text-white placeholder:text-white/10"
                                    />
                                </div>

                                <div className="border-b border-white/10 pb-4 group focus-within:border-secondary transition-colors text-left">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2 block">Your Message</label>
                                    <textarea
                                        rows="3"
                                        placeholder="How can we help you?"
                                        className="bg-transparent w-full text-xl font-medium outline-none text-white placeholder:text-white/10 resize-none"
                                    ></textarea>
                                </div>

                                <button className="bg-secondary text-primary py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-secondary/20 mt-4">
                                    Send Your Inquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-secondary p-2 rounded-xl">
                            <Coffee size={20} className="text-primary" />
                        </div>
                        <span className="text-2xl font-serif font-black tracking-tighter">CAFFEE AROMICA</span>
                    </div>

                    <p className="text-[10px] uppercase font-black tracking-widest text-white/20">
                        © 2026 Crafted with Passion for Artisanal Coffee Culture.
                    </p>

                    <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest text-white/40">
                        <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-secondary transition-colors">Legal</a>
                        <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <motion.a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    y: [0, -10, 0],
                }}
                whileHover={{ scale: 1.1 }}
                transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-[24px] shadow-[0_20px_40px_-10px_rgba(37,211,102,0.5)] z-50 flex items-center justify-center group"
            >
                <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            </motion.a>
        </footer>
    );
};

export default Contact;
