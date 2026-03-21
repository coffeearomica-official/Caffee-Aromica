import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../constants';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    const handleWhatsAppClick = () => {
        const defaultMessage = encodeURIComponent("Hi, I would like to know more about Caffee Aromica! ☕");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`, '_blank');
    };

    return (
        <motion.div
            className="floating-whatsapp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={handleWhatsAppClick}
        >
            <div className="wa-pulse"></div>
            <div className="wa-icon-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="wa-icon"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.95 7.95 0 01-4.07-1.12l-.29-.17-3.01.8.81-2.96-.19-.3A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            </div>
            <div className="wa-tooltip">Chat with us!</div>
        </motion.div>
    );
};

export default FloatingWhatsApp;
