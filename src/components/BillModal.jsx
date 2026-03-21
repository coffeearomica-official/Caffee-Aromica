import React from "react";
import { WHATSAPP_NUMBER } from "../constants";
import "./BillModal.css";

const BillModal = ({ cart, customer, onClose, onBack }) => {
    const cartItems = Object.values(cart);
    const subTotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    const taxAmount = Number((subTotal * 0.05).toFixed(2));
    const grandTotal = Number((subTotal + taxAmount).toFixed(2));
    const formatINR = (amount) =>
        amount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    // ── WhatsApp message with customer details ─────────────────
    const sendToWhatsApp = () => {
        if (cartItems.length === 0) return;

        let message = "🍵 *New Order — Caffee Aromica*\n\n";

        // Customer details block
        if (customer) {
            message += `Order Type: Delivery\n\n`;
            message += `👤 *Customer Details:*\n`;
            message += `Name: ${customer.name}\n`;
            message += `Mobile: ${customer.mobile}\n`;
            message += `Address: ${customer.address}\n\n`;
        }

        // Order items block
        message += `🛒 *Order Details:*\n`;
        cartItems.forEach((item, i) => {
            message += `${i + 1}. ${item.name} x ${item.qty} = ₹${item.qty * item.price}\n`;
        });
        message += `\nSubtotal: ₹${formatINR(subTotal)}`;
        message += `\nTax (5%): ₹${formatINR(taxAmount)}`;
        message += `\n*Grand Total: ₹${formatINR(grandTotal)}*\n\nPlease confirm my order. Thank you! 🙏`;

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    };

    return (
        <div className="bill-overlay" role="dialog" aria-modal="true" aria-label="Order Bill">
            <div className="bill-modal">

                {/* ── Header ──────────────────────────────────── */}
                <div className="bill-header">
                    <div className="bill-logo">☕</div>
                    <div>
                        <h2 className="bill-title">Order Summary</h2>
                        <p className="bill-sub">Caffee Aromica</p>
                    </div>
                    <button className="bill-close-btn" onClick={onClose} aria-label="Close bill">✕</button>
                </div>

                {/* ── Customer Details Card ────────────────────── */}
                {customer && (
                    <div className="bill-customer-card">
                        <div className="bill-customer-header">
                            <span className="bill-customer-icon">👤</span>
                            <h3 className="bill-customer-title">Customer Details</h3>
                            <span className={`bill-order-type bill-order-type--${customer.orderType.toLowerCase()}`}>
                                {customer.orderType === "Delivery" ? "🛵 Delivery" : "🏪 Pickup"}
                            </span>
                        </div>
                        <div className="bill-customer-grid">
                            <div className="bill-customer-row">
                                <span className="bill-customer-label">Name</span>
                                <span className="bill-customer-value">{customer.name}</span>
                            </div>
                            <div className="bill-customer-row">
                                <span className="bill-customer-label">Mobile</span>
                                <span className="bill-customer-value">{customer.mobile}</span>
                            </div>
                            {customer.orderType === "Delivery" && (
                                <div className="bill-customer-row bill-customer-row--address">
                                    <span className="bill-customer-label">Address</span>
                                    <span className="bill-customer-value">{customer.address}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── Items Table ──────────────────────────────── */}
                <div className="bill-table-wrap">
                    <table className="bill-table">
                        <thead>
                            <tr>
                                <th className="col-name">Item</th>
                                <th className="col-qty">Qty</th>
                                <th className="col-price">Price</th>
                                <th className="col-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="bill-row">
                                    <td className="col-name">{item.name}</td>
                                    <td className="col-qty">{item.qty}</td>
                                    <td className="col-price">₹{formatINR(item.price)}</td>
                                    <td className="col-total">₹{formatINR(item.qty * item.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bill-tax-breakup">
                    <div className="bill-tax-row">
                        <span>Subtotal</span>
                        <span>₹{formatINR(subTotal)}</span>
                    </div>
                    <div className="bill-tax-row">
                        <span>Tax (5%)</span>
                        <span>₹{formatINR(taxAmount)}</span>
                    </div>
                </div>

                {/* ── Grand Total ──────────────────────────────── */}
                <div className="bill-grand-total">
                    <span>Grand Total</span>
                    <span className="grand-amount">₹{formatINR(grandTotal)}</span>
                </div>

                {/* ── Note ────────────────────────────────────── */}
                <p className="bill-note">
                    ✨ A 5% tax is added to the subtotal. Your order will be confirmed on WhatsApp.
                </p>

                {/* ── Actions ─────────────────────────────────── */}
                <div className="bill-actions">
                    <button className="bill-back-btn" onClick={onBack}>← Edit Details</button>
                    <button
                        className="bill-whatsapp-btn"
                        onClick={sendToWhatsApp}
                        disabled={cartItems.length === 0}
                        id="send-whatsapp-btn"
                    >
                        <svg viewBox="0 0 24 24" className="wa-icon" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.07-1.35A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.95 7.95 0 01-4.07-1.12l-.29-.17-3.01.8.81-2.96-.19-.3A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                        Send Order on WhatsApp
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BillModal;
