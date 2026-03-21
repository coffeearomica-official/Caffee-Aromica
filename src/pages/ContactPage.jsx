import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ContactPage.css";

const initialFormState = {
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
};

const ContactPage = () => {
    const { hash } = useLocation();
    const [formData, setFormData] = useState(initialFormState);
    const [submitState, setSubmitState] = useState({
        isSubmitting: false,
        type: "",
        message: "",
    });

    useEffect(() => {
        if (hash === "#contact-form") {
            const target = document.getElementById("contact-form");
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [hash]);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmitState({
                isSubmitting: false,
                type: "error",
                message: "Email service is not configured yet. Add the EmailJS Vite variables and try again.",
            });
            return;
        }

        setSubmitState({
            isSubmitting: true,
            type: "",
            message: "",
        });

        try {
            const submittedAt = new Date().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
            });

            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                        name: formData.fullName,
                        full_name: formData.fullName,
                        phone: formData.phone,
                        email: formData.email,
                        title: formData.subject,
                        subject: formData.subject,
                        message: formData.message,
                        time: submittedAt,
                        submitted_at: submittedAt,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error("EmailJS request failed");
            }

            setFormData(initialFormState);
            setSubmitState({
                isSubmitting: false,
                type: "success",
                message: "Your inquiry has been sent. Our team will get back to you soon.",
            });
        } catch {
            setSubmitState({
                isSubmitting: false,
                type: "error",
                message: "We could not send your inquiry right now. Please try again in a moment.",
            });
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero-inner">
                    <p className="contact-kicker">WE WOULD LOVE TO HEAR FROM YOU</p>
                    <h1>Contact Caffee Aromica</h1>
                    <p className="contact-subtitle">
                        Have a question, a special request, or want to plan a visit? Send us a note and
                        our team will get back to you soon.
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="contact-grid">
                    <div className="contact-details">
                        <div className="contact-card">
                            <h3>Visit Us</h3>
                            <p>Caffee Aromica</p>
                            <p>Opp. to Cummins</p>
                            <p>Balewadi High Street</p>
                            <p>Pune, Maharashtra 411045</p>
                            <p className="contact-note">Open daily: 8:00 AM to 3:00 AM</p>
                        </div>

                        <div className="contact-card">
                            <h3>Reach Out</h3>
                            <p>hello@caffearomica.com</p>
                            <p>+91 80556 83334</p>
                            <p className="contact-note">We respond within 24 hours.</p>
                        </div>

                        <div className="contact-card contact-highlight">
                            <h3>Private Events</h3>
                            <p>Book our space for celebrations, meetings, or tastings.</p>
                            <button type="button" className="contact-cta-btn">
                                Request Event Details
                            </button>
                        </div>
                    </div>

                    <div className="contact-form-wrap" id="contact-form">
                        <div className="contact-form-card">
                            <h2>Send a Message</h2>
                            <p>We are ready to help with orders, partnerships, or any other inquiry.</p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-field">
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 80556 83334"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="hello@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="How can we help?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Share details about your request"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {submitState.message ? (
                                    <p className={`contact-form-status contact-form-status--${submitState.type}`}>
                                        {submitState.message}
                                    </p>
                                ) : null}

                                <button type="submit" className="contact-submit" disabled={submitState.isSubmitting}>
                                    {submitState.isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-map">
                <div className="contact-map-card">
                    <div>
                        <h2>Find Us Easily</h2>
                        <p>
                            We are located at Balewadi High Street, Pune. Drop by for a premium coffee experience
                            or plan your next meetup with us.
                        </p>
                    </div>
                    <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                        <iframe
                            title="Caffee Aromica Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.7750!3d18.5670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzAxLjIiTiA3M8KwNDYnMzAuMCJF!5e0!3m2!1sen!2sin!4v1680000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '300px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
