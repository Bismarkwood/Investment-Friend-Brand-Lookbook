import React, { useState } from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema, SITE_URL } from '../seo.config';
import '../components/HeroSplit.css';
import ContactForm from '../components/ContactForm';
import CtaBanner from '../components/CtaBanner';
import CoachingBookingModal from '../components/CoachingBookingModal';
import contactHeroImg from '../assets/contact-hero-bg.jpg';
import './Contact.css';

export default function Contact() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="page-contact anim-site-enter">
      <SEO 
        title="Contact Investment Friend | Classes and Coaching in Ghana"
        description="Contact Investment Friend about financial literacy classes, coaching, clubs or partnerships in Ghana. Find our contact details and send the team a message."
        path="/contact"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' }
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Investment Friend',
            url: `${SITE_URL}/contact`,
            mainEntity: { '@id': `${SITE_URL}/#organization` }
          }
        ]}
      />

      <section className="hero-split">
        <div className="container">
          <div className="hero-split__top anim-fade-up">
            <h1 className="hero-split__headline">
              Contact <span style={{ color: 'var(--gold-primary)' }}>Investment<br />Friend</span>
            </h1>
            <div className="hero-split__desc-wrap">
              <p className="hero-split__desc">
                Whether you have a question about classes, want to book coaching, or just want to say hello, we are here.
              </p>
              <div className="hero-split__actions">
                <a href="#contact-form" className="hero-btn hero-btn--primary cta-gold-anim">
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
        primaryAction={{ text: 'Book a coaching session', onClick: () => setIsBookingModalOpen(true), icon: 'arrow-up-right' }}
        secondaryAction={{ text: 'Join a class', href: '/service/classes', icon: 'arrow-right' }}
      />

      <CoachingBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </main>
  );
}
