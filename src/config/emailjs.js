const EMAILJS_DEFAULTS = {
    serviceId: "service_zu992q1",
    templateId: "template_wavyrj4",
    publicKey: "kZ4AdurcYET6aSm15",
};

export const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_DEFAULTS.serviceId,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_DEFAULTS.templateId,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_DEFAULTS.publicKey,
};
