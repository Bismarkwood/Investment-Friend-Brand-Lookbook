import React from 'react';
import '../components/HeroSplit.css';
import ContactForm from '../components/ContactForm';
import CtaBanner from '../components/CtaBanner';
import contactHeroImg from '../assets/contact-hero-bg.jpg';
import './Contact.css';

export default function Contact() {
  return (
    <main className="page-contact anim-site-enter">
      <title>Contact — Investment Friend</title>
      <meta
        name="description"
        content="Get in touch with Investment Friend. Book a consultation, ask about classes, or connect with our team in Accra, Ghana."
      />

      <section className="hero-split">
        <div className="container">
          <div className="hero-split__top anim-fade-up">
            <h1 className="hero-split__headline">
              Let us hear<br />
              <span style={{ color: 'var(--gold-primary)' }}>from you.</span>
            </h1>
            <div className="hero-split__desc-wrap">
              <p className="hero-split__desc">
                Whether you have a question about classes, want to book coaching, or just want to say hello, we are here.
              </p>
              <div className="hero-split__actions">
                <a href="#contact-form" className="hero-btn hero-btn--primary">
                  <span>Send a Message</span>
                  <span className="hero-btn__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </span>
                </a>
                <a href="#contact-map" className="hero-btn hero-btn--secondary">
                  <span>Find Us on the Map</span>
                  <span className="hero-btn__icon-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-split__image-wrap anim-fade-up" style={{ animationDelay: '0.3s' }}>
          <img src={contactHeroImg} alt="Contact Hero" className="hero-split__image" />
        </div>
      </section>

      <ContactForm />

      <CtaBanner
        title={<>Ready When<br />You Are</>}
        description="Book a coaching session or join the next class. If you are still deciding, send us a message and we will help you pick the right starting point."
        primaryAction={{ text: 'Book a coaching session', href: '/service/coaching', icon: 'arrow-up-right' }}
        secondaryAction={{ text: 'Join a class', href: '/service/classes', icon: 'arrow-right' }}
      />
    </main>
  );
}
