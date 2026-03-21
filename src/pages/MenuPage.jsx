import React, { useState, useEffect } from "react";
import "./MenuPage.css";
import { useMenu } from "../context/MenuContext";
import OrderModal from "../components/OrderModal";
import { WHATSAPP_NUMBER } from "../constants";

const MenuPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ── Shared menu data from context (single source of truth) ──
    const { menu, menuCategories } = useMenu();

    // ── Local UI state ──────────────────────────────────────────
    const [activeTab, setActiveTab] = useState(menuCategories[0]);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [cart, setCart] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const displayItems = menu[activeTab] || [];

    // ── Cart helpers (inline-page cart still works as before) ───
    const getItemKey = (category, item) => `${category}::${item.name}`;

    const addToCart = (itemKey, item) => {
        setCart(prev => ({
            ...prev,
            [itemKey]: prev[itemKey]
                ? { ...prev[itemKey], qty: prev[itemKey].qty + 1 }
                : { ...item, qty: 1 },
        }));
    };

    const removeOne = (itemKey) => {
        setCart(prev => {
            const next = { ...prev };
            if (!next[itemKey]) return prev;
            if (next[itemKey].qty > 1) {
                next[itemKey].qty -= 1;
            } else {
                delete next[itemKey];
            }
            return next;
        });
    };

    const totalPrice = Object.values(cart).reduce(
        (sum, item) => sum + item.qty * item.price,
        0
    );

    const sendToWhatsApp = () => {
        if (Object.keys(cart).length === 0) {
            alert("Please add at least one item!");
            return;
        }
        let message = "New Order from Caffee Aromica Website\n\n";
        Object.values(cart).forEach((item, i) => {
            message += `${i + 1}. ${item.name} x ${item.qty} = Rs.${item.qty * item.price}\n`;
        });
        message += `\nTotal: Rs.${totalPrice}\n`;
        message += "\nPlease confirm my order.";
        const encodedMessage = encodeURIComponent(message);
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
            "_blank"
        );
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
    };

    return (
        <div className="menu-page-wrapper">
            <div className="menu-container">
                <p className="small-text">Explore Our</p>
                <h1>AROMICA'S MENU</h1>
                <p className="menu-tagline">
                    Crafted with love, brewed for perfection - discover your favorite sip at Caffee Aromica.
                </p>

                {/* ── ORDER NOW button ─────────────────────────── */}
                <button
                    className="order-now-btn"
                    id="order-now-trigger"
                    onClick={() => setShowOrderModal(true)}
                >
                    <span className="order-now-icon">🛍️</span>
                    ORDER NOW via WhatsApp
                </button>

                {/* ── Category Tabs ─────────────────────────────── */}
                <div className="tabs">
                    {menuCategories.map((cat) => (
                        <div
                            key={cat}
                            className={`tab ${activeTab === cat ? "active" : ""}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                {/* ── Menu Grid ─────────────────────────────────── */}
                <div className="menu-grid">
                    {displayItems.map((item) => {
                        const itemKey = getItemKey(activeTab, item);
                        const selected = cart[itemKey];

                        return (
                            <div className="lux-card" key={itemKey}>
                                <div className="lux-img-wrap">
                                    <img src={item.image || "/cup.png"} alt="coffee cup" />
                                </div>

                                <div className="lux-content">
                                    <div className="lux-name">{item.name}</div>
                                    <div className="lux-price-wrap">
                                        <span className="lux-price">Rs.{item.price}.00</span>
                                    </div>
                                </div>

                                {selected && (
                                    <div className="qty-controls">
                                        <button
                                            className="qty-btn"
                                            onClick={() => removeOne(itemKey)}
                                        >
                                            -
                                        </button>
                                        <span className="qty-display">{selected.qty}</span>
                                        <button
                                            className="qty-btn"
                                            onClick={() => addToCart(itemKey, item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── Menu Features ──────────────────────────────── */}
                <div className="menu-features">
                    <div className="feature">
                        <h3>Freshly Brewed</h3>
                        <p>Every cup is made with freshly ground premium coffee beans.</p>
                    </div>
                    <div className="feature">
                        <h3>Natural Ingredients</h3>
                        <p>We use high-quality, natural flavors with no artificial taste.</p>
                    </div>
                    <div className="feature">
                        <h3>Made with Love</h3>
                        <p>Our baristas craft each drink with passion and care.</p>
                    </div>
                </div>
            </div>

            {/* ── CTA Section ──────────────────────────────────── */}
            <div className="menu-cta-section">
                <h2>Your Perfect Cup Awaits</h2>
                <p>
                    Visit Caffee Aromica today or place your order online to enjoy your favorite
                    drinks from the comfort of your home.
                </p>

                {showSuccess && (
                    <div className="success-notification">
                        <div className="success-content">
                            <span className="success-icon">✓</span>
                            <div>
                                <h4>Order Sent Successfully!</h4>
                                <p>Check your WhatsApp. We'll confirm your order shortly.</p>
                            </div>
                        </div>
                    </div>
                )}

                {Object.keys(cart).length > 0 && (
                    <div className="cart-section">
                        <h3>Your Cart ({Object.keys(cart).length} items)</h3>

                        <div className="cart-items">
                            {Object.entries(cart).map(([itemKey, item]) => (
                                <div key={itemKey} className="cart-item">
                                    <span className="item-details">
                                        {item.name} x {item.qty} = Rs.{item.qty * item.price}
                                    </span>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeOne(itemKey)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-total">
                            <h4>Total: Rs.{totalPrice}</h4>
                        </div>

                        <button className="whatsapp-btn" onClick={sendToWhatsApp}>
                            Send Order to WhatsApp
                        </button>
                    </div>
                )}
            </div>

            {/* ── Brand Section ─────────────────────────────────── */}
            <div className="menu-brand-section">
                <h2>Savor the Caffee Aromica Experience</h2>
                <p>
                    At Caffee Aromica, every beverage is more than just a drink - it's a crafted
                    experience. From freshly brewed coffee to indulgent hot chocolates and refreshing
                    iced delights, our menu is designed to elevate your moments, whether you're
                    catching up with friends, working in peace, or simply treating yourself.
                </p>
                <p>
                    We believe in quality, authenticity, and warmth in every cup. Step into our
                    world of rich aromas, smooth flavors, and heartfelt hospitality.
                </p>
            </div>

            {/* ── Why Us Section ─────────────────────────────────── */}
            <div className="menu-why-us">
                <h2>Why Choose Caffee Aromica?</h2>
                <ul>
                    <li>Premium coffee sourced from the finest beans</li>
                    <li>Handcrafted beverages made by skilled baristas</li>
                    <li>Fresh ingredients with no artificial flavoring</li>
                    <li>Cozy and welcoming cafe ambiance</li>
                    <li>Perfect blend of taste, aroma, and presentation</li>
                </ul>
            </div>

            {/* ── Order Modal ────────────────────────────────────── */}
            {showOrderModal && (
                <OrderModal onClose={() => setShowOrderModal(false)} />
            )}
        </div>
    );
};

export default MenuPage;
