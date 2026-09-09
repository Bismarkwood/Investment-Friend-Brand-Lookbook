import React, { useEffect, useRef, useState } from 'react';
import './ContactForm.css';
import CustomSelect from './CustomSelect';

const ENQUIRY_OPTIONS = ['Classes', 'Coaching', 'Clubs', 'Partnership', 'Media', 'Other'];

/* Placeholder office details — replace with the real address */
const OFFICE = {
  name: 'Investment Friend',
  addressLines: ['Accra', 'Greater Accra Region', 'Ghana'],
  mapQuery: 'Accra, Ghana',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Accra%2C+Ghana'
};

const EMPTY_FORM = { name: '', email: '', phone: '', enquiry: '', message: '' };

export default function ContactForm() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (sent) setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to a mail/form endpoint. For now we confirm locally.
    setSent(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section
      id="contact-form"
      className={`contact-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container contact__grid">

        {/* ---------- Form ---------- */}
        <div className="contact__form-col anim-fade-up">
          <div className="section-header section-header--left">
            <span className="section-header__eyebrow">Contact Form</span>
            <h2 className="section-header__title">Send us a message</h2>
            <p className="section-header__description">
              Tell us what you need and we will get back to you within one business day.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="cf-phone">Phone</label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+233 00 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="cf-enquiry">Enquiry</label>
                <CustomSelect
                  id="cf-enquiry"
                  value={form.enquiry}
                  onChange={(val) => setForm((prev) => ({ ...prev, enquiry: val }))}
                  placeholder="Select an option"
                  options={ENQUIRY_OPTIONS}
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="6"
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary contact-form__submit">
              <span>Send Message</span>
              <span className="btn__icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </button>

            <p className="contact-form__status" role="status" aria-live="polite">
              {sent ? 'Thanks for reaching out. We will be in touch shortly.' : ''}
            </p>
          </form>
        </div>

        {/* ---------- Map ---------- */}
        <aside id="contact-map" className="contact__map-col anim-fade-up anim-delay-1">
          <div className="contact__map">
            <iframe
              title="Investment Friend office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="contact__map-info">
            <h3 className="contact__map-title">{OFFICE.name}</h3>
            <address className="contact__map-address">
              {OFFICE.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <a
              href={OFFICE.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-directions"
            >
              Get directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
          </div>
        </aside>

      </div>
    </section>
  );
}
