import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Coffee,
    CupSoda,
    Snowflake,
    GlassWater,
    Sparkles,
    Milk,
    Flame,
    X,
} from 'lucide-react';
import { useMenu } from '../context/MenuContext';
import CustomerFormModal from './CustomerFormModal';
import BillModal from './BillModal';
import './OrderModal.css';

const CATEGORY_ICONS = {
    'Hot Beverages': Coffee,
    'Hot Chocolate': Flame,
    'Ice Tea': GlassWater,
    'Iced Coffee': Snowflake,
    'Cold Beverages': CupSoda,
    Mojito: Sparkles,
    Shakes: Milk,
    'Signature Beverages': Sparkles,
};

const CATEGORY_DESCRIPTIONS = {
    'Hot Beverages': 'Slow brewed and rich in aroma for coffee lovers.',
    'Hot Chocolate': 'Silky, warm and indulgent chocolate comfort.',
    'Ice Tea': 'Light, refreshing and fruity tea coolers.',
    'Iced Coffee': 'Chilled coffee blends with smooth texture.',
    'Cold Beverages': 'Creamy frappes and cool cafe signatures.',
    Mojito: 'Crisp and sparkling mocktails with fresh notes.',
    Shakes: 'Thick, creamy shakes crafted for dessert lovers.',
    'Signature Beverages': 'House specials curated by Caffee Aromica.',
};

const formatINR = (value) => `Rs.${Number(value).toFixed(2)}`;

const OrderModal = ({ onClose }) => {
    const { menu, menuCategories } = useMenu();

    const [activeTab, setActiveTab] = useState(menuCategories[0]);
    const [cart, setCart] = useState({});
    const [showCustomerForm, setShowCustomerForm] = useState(false);
    const [customer, setCustomer] = useState(null);
    const [showBill, setShowBill] = useState(false);

    const displayItems = menu[activeTab] || [];

    const cartItems = useMemo(() => Object.values(cart), [cart]);
    const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

    const addToCart = (item) => {
        setCart((prev) => ({
            ...prev,
            [item.id]: prev[item.id]
                ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
                : { ...item, qty: 1 },
        }));
    };

    const decreaseQty = (item) => {
        setCart((prev) => {
            const next = { ...prev };
            if (!next[item.id]) return prev;
            if (next[item.id].qty > 1) {
                next[item.id] = { ...next[item.id], qty: next[item.id].qty - 1 };
            } else {
                delete next[item.id];
            }
            return next;
        });
    };

    const handleViewBill = () => {
        if (totalQty === 0) return;
        setShowCustomerForm(true);
    };

    const handleCustomerConfirm = (customerData) => {
        setCustomer(customerData);
        setShowCustomerForm(false);
        setShowBill(true);
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('order-modal-open');
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('order-modal-open');
        };
    }, []);

    if (showBill) {
        return (
            <BillModal
                cart={cart}
                customer={customer}
                onClose={onClose}
                onBack={() => {
                    setShowBill(false);
                    setShowCustomerForm(true);
                }}
            />
        );
    }

    if (showCustomerForm) {
        return (
            <CustomerFormModal
                cart={cart}
                onBack={() => setShowCustomerForm(false)}
                onConfirm={handleCustomerConfirm}
            />
        );
    }

    return (
        <div className="om-overlay" role="dialog" aria-modal="true" aria-label="Order Menu" onClick={onClose}>
            <motion.div
                className="om-modal"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
            >
                <div className="om-topbar">
                    <div className="om-brand">
                        <span className="om-brand-icon" aria-hidden="true">
                            <Coffee size={22} />
                        </span>
                        <div>
                            <h2 className="om-title">Order Menu</h2>
                            <p className="om-sub">Caffee Aromica</p>
                        </div>
                    </div>
                    <button className="om-close" onClick={onClose} aria-label="Close modal">
                        <X size={18} />
                    </button>
                </div>

                <div className="om-tabs" role="tablist" aria-label="Drink categories">
                    {menuCategories.map((category) => {
                        const Icon = CATEGORY_ICONS[category] || Coffee;
                        return (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === category}
                                className={`om-tab ${activeTab === category ? 'om-tab--active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                <Icon size={16} />
                                <span>{category}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="om-shell">
                    <div className="om-main-panel">
                        <div className="om-section-head">
                            <h3>{activeTab}</h3>
                            <p>{CATEGORY_DESCRIPTIONS[activeTab] || 'Handcrafted menu items with premium ingredients.'}</p>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                className="om-items-grid"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                {displayItems.map((item) => {
                                    const inCart = cart[item.id];
                                    return (
                                        <article key={item.id} className="om-item-card">
                                            <div className="om-item-media">
                                                <img src={item.image} alt={item.name} />
                                            </div>

                                            <div className="om-item-body">
                                                <h4>{item.name}</h4>
                                                <p>{CATEGORY_DESCRIPTIONS[item.category] || 'Freshly made and served with care.'}</p>
                                                <div className="om-item-footer">
                                                    <span className="om-item-price">{formatINR(item.price)}</span>
                                                    {inCart ? (
                                                        <div className="om-qty">
                                                            <button type="button" onClick={() => decreaseQty(item)} aria-label="Decrease quantity">
                                                                -
                                                            </button>
                                                            <span>{inCart.qty}</span>
                                                            <button type="button" onClick={() => addToCart(item)} aria-label="Increase quantity">
                                                                +
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button type="button" className="om-add-btn" onClick={() => addToCart(item)}>
                                                            Add to Order
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <aside className="om-cart-panel">
                        <div className="om-cart-head">
                            <h3>Your Order</h3>
                            <span>{totalQty} items</span>
                        </div>

                        <div className="om-cart-items">
                            {cartItems.length === 0 ? (
                                <p className="om-empty-cart">Add drinks to see your summary here.</p>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="om-cart-item">
                                        <div className="om-cart-item-meta">
                                            <p>{item.name}</p>
                                            <small>{item.qty} x {formatINR(item.price)}</small>
                                        </div>
                                        <strong className="om-cart-item-total">{formatINR(item.qty * item.price)}</strong>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="om-cart-total-row">
                            <span>Total</span>
                            <strong>{formatINR(totalPrice)}</strong>
                        </div>

                        <button
                            type="button"
                            className="om-checkout-btn"
                            onClick={handleViewBill}
                            disabled={cartItems.length === 0}
                            id="view-bill-btn"
                        >
                            Proceed to Checkout
                        </button>
                    </aside>
                </div>
            </motion.div>
        </div>
    );
};

export default OrderModal;
