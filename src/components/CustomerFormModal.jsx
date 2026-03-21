import React, { useState, useEffect, useRef } from "react";
import "./CustomerFormModal.css";

const CustomerFormModal = ({ cart, onBack, onConfirm }) => {
    // ── Form state (Delivery only) ────────────────────────────
    const orderType = "Delivery";   // Fixed — Delivery only
    const [customer, setCustomer] = useState({
        name: "",
        mobile: "",
        address: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const nameRef = useRef(null);

    // Auto-focus name field on mount
    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    // Cart summary for the mini preview strip
    const cartItems = Object.values(cart);
    const grandTotal = cartItems.reduce((s, i) => s + i.qty * i.price, 0);
    const totalQty = cartItems.reduce((s, i) => s + i.qty, 0);

    // ── Validation ──────────────────────────────────────────────
    const validate = (fields = customer) => {
        const e = {};
        if (!fields.name.trim()) e.name = "Name is required";
        if (!fields.mobile.trim()) e.mobile = "Mobile number is required";
        else if (!/^\d{10}$/.test(fields.mobile.trim())) e.mobile = "Enter a valid 10-digit number";
        if (!fields.address.trim()) e.address = "Delivery address is required";
        return e;
    };

    // ── Handlers ────────────────────────────────────────────────
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...customer, [name]: value };
        setCustomer(updated);
        // Clear error on type if field was already touched
        if (touched[name]) {
            setErrors(validate(updated));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(validate());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mark all fields touched
        setTouched({ name: true, mobile: true, address: true });
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;
        // Pass validated customer details up to OrderModal
        onConfirm({ ...customer, orderType });
    };

    const isValid = Object.keys(validate()).length === 0;

    return (
        <div className="cf-overlay" role="dialog" aria-modal="true" aria-label="Customer Details">
            <div className="cf-modal">

                {/* ── Header ──────────────────────────────────── */}
                <div className="cf-header">
                    <div className="cf-header-brand">
                        <span className="cf-header-icon">📋</span>
                        <div>
                            <h2 className="cf-title">Your Details</h2>
                            <p className="cf-sub">Almost there! Where should we deliver?</p>
                        </div>
                    </div>
                    <button className="cf-back-icon" onClick={onBack} aria-label="Go back">←</button>
                </div>

                {/* ── Order Preview Strip ──────────────────────── */}
                <div className="cf-order-strip">
                    <div className="cf-strip-left">
                        <span className="cf-strip-icon">🛒</span>
                        <span className="cf-strip-text">{totalQty} item{totalQty !== 1 ? "s" : ""} in cart</span>
                    </div>
                    <span className="cf-strip-total">₹{grandTotal}</span>
                </div>

                {/* ── Form ────────────────────────────────────── */}
                <form className="cf-form" onSubmit={handleSubmit} noValidate>

                    {/* Static Delivery Badge */}
                    <div className="cf-delivery-badge">
                        <span className="cf-delivery-badge-icon">🚚</span>
                        <div>
                            <span className="cf-delivery-badge-label">Delivery Order</span>
                            <p className="cf-delivery-badge-note">Your order will be delivered to your address. We'll confirm via WhatsApp.</p>
                        </div>
                    </div>

                    {/* Name */}
                    <div className={`cf-field ${errors.name && touched.name ? "cf-field--error" : ""}`}>
                        <label className="cf-label" htmlFor="cf-name">
                            Full Name <span className="cf-required">*</span>
                        </label>
                        <div className="cf-input-wrap">
                            <span className="cf-input-icon">👤</span>
                            <input
                                ref={nameRef}
                                id="cf-name"
                                type="text"
                                name="name"
                                className="cf-input"
                                placeholder="e.g. Pradip Dhale"
                                value={customer.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="name"
                            />
                        </div>
                        {errors.name && touched.name && (
                            <p className="cf-error-msg" role="alert">{errors.name}</p>
                        )}
                    </div>

                    {/* Mobile */}
                    <div className={`cf-field ${errors.mobile && touched.mobile ? "cf-field--error" : ""}`}>
                        <label className="cf-label" htmlFor="cf-mobile">
                            Mobile Number <span className="cf-required">*</span>
                        </label>
                        <div className="cf-input-wrap">
                            <span className="cf-input-icon">📱</span>
                            <input
                                id="cf-mobile"
                                type="tel"
                                name="mobile"
                                className="cf-input"
                                placeholder="10-digit mobile number"
                                value={customer.mobile}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                maxLength={10}
                                inputMode="numeric"
                                autoComplete="tel"
                            />
                        </div>
                        {errors.mobile && touched.mobile && (
                            <p className="cf-error-msg" role="alert">{errors.mobile}</p>
                        )}
                    </div>

                    {/* Delivery Address — always shown */}
                    <div className={`cf-field ${errors.address && touched.address ? "cf-field--error" : ""}`}>
                        <label className="cf-label" htmlFor="cf-address">
                            Delivery Address <span className="cf-required">*</span>
                        </label>
                        <div className="cf-input-wrap cf-textarea-wrap">
                            <span className="cf-input-icon cf-textarea-icon">📍</span>
                            <textarea
                                id="cf-address"
                                name="address"
                                className="cf-input cf-textarea"
                                placeholder="e.g. Flat 4B, Balewadi, Pune - 411045"
                                rows={3}
                                value={customer.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="street-address"
                            />
                        </div>
                        {errors.address && touched.address && (
                            <p className="cf-error-msg" role="alert">{errors.address}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        id="cf-confirm-btn"
                        className={`cf-submit-btn ${isValid ? "cf-submit-btn--ready" : ""}`}
                    >
                        <span>View Final Bill</span>
                        <span className="cf-submit-arrow">→</span>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CustomerFormModal;
