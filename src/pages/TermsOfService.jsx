import React, { useEffect, useState } from 'react';
import './LegalPages.css';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('agreement');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) => {
            return (prev.boundingClientRect.top < current.boundingClientRect.top) ? prev : current;
          });
          setActiveSection(topEntry.target.id);
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('.legal-section');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileTocOpen(false);
      setActiveSection(id);
    }
  };

  const sectionsList = [
    { id: 'agreement', title: 'Agreement to Terms' },
    { id: 'intellectual-property', title: 'Intellectual Property Rights' },
    { id: 'user-representations', title: 'User Representations' },
    { id: 'prohibited-activities', title: 'Prohibited Activities' },
    { id: 'disclaimers', title: 'Disclaimers & Limitations' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <main className="page-legal anim-site-enter">
      <SEO
        title="Terms of Service | Investment Friend"
        description="Read the Investment Friend Terms of Service outlining the rules, guidelines, and agreements for using our platform."
        path="/terms"
      />

      <div className="legal-container container">
        {/* Inset Intro Card */}
        <section className="legal-intro-card anim-fade-up">
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link> <span className="legal-breadcrumb-sep">/</span> 
            <span>Legal</span> <span className="legal-breadcrumb-sep">/</span> 
            <span className="legal-breadcrumb-current">Terms of Service</span>
          </div>
          
          <h1 className="legal-intro-card__title">Terms of Service</h1>
          <p className="legal-intro-card__desc">
            These terms govern your use of our platform, services, and educational materials.
          </p>
          
          <div className="legal-intro-card__bottom">
            <p className="legal-intro-card__date">Last updated: September 2026</p>
          </div>
        </section>

        <section className="legal-content">
          <div className="legal-content__inner">
            
            {/* Sidebar Table of Contents */}
            <aside className="legal-toc-wrapper anim-fade-up" style={{ animationDelay: '0.2s' }}>
              
              {/* Mobile Toggle */}
              <button 
                className="legal-toc-mobile-toggle"
                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              >
                <span>On this page</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isMobileTocOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className={`legal-toc ${isMobileTocOpen ? 'legal-toc--open' : ''}`}>
                <h3 className="legal-toc__title">On this page</h3>
                <ul className="legal-toc__list">
                  {sectionsList.map((sec, index) => (
                    <li key={sec.id}>
                      <a 
                        href={`#${sec.id}`} 
                        className={`legal-toc__link ${activeSection === sec.id ? 'legal-toc__link--active' : ''}`}
                        onClick={(e) => scrollToSection(e, sec.id)}
                      >
                        <span className="legal-toc__num">{index + 1}.</span> {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Policy Content */}
            <article className="legal-article anim-fade-up" style={{ animationDelay: '0.3s' }}>
              
              <div id="agreement" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">1.</span> Agreement to Terms</h2>
                <p className="legal-section__text">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Investment Friend (“we,” “us” or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                </p>
                <p className="legal-section__text">
                  You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the website and you must discontinue use immediately.
                </p>
              </div>

              <div id="intellectual-property" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">2.</span> Intellectual Property Rights</h2>
                <p className="legal-section__text">
                  Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
                <p className="legal-section__text">
                  The Content and the Marks are provided on the website “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the website and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </div>

              <div id="user-representations" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">3.</span> User Representations</h2>
                <p className="legal-section__text">
                  By using the website, you represent and warrant that:
                </p>
                <ul className="legal-section__list">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                  <li>You will not access the website through automated or non-human means, whether through a bot, script, or otherwise.</li>
                </ul>
              </div>

              <div id="prohibited-activities" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">4.</span> Prohibited Activities</h2>
                <p className="legal-section__text">
                  You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <p className="legal-section__text">
                  As a user of the website, you agree not to:
                </p>
                <ul className="legal-section__list">
                  <li>Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the website.</li>
                  <li>Use any information obtained from the website in order to harass, abuse, or harm another person.</li>
                </ul>
              </div>

              <div id="disclaimers" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">5.</span> Disclaimers & Limitations</h2>
                <p className="legal-section__text">
                  <strong>Educational Purposes Only:</strong> The information provided on Investment Friend is for educational and informational purposes only and does not constitute financial, investment, or legal advice. We are not a registered investment advisor or broker-dealer. 
                </p>
                <p className="legal-section__text">
                  <strong>No Guarantees:</strong> Past performance is not indicative of future results. We make no representations, warranties, or guarantees, express or implied, regarding the accuracy, reliability, or completeness of the content provided or the success of any investment strategies discussed. You are solely responsible for your own investment decisions.
                </p>
              </div>

              <div id="contact" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">6.</span> Contact Us</h2>
                <div className="legal-contact-panel">
                  <p className="legal-section__text" style={{ marginBottom: '16px' }}>
                    In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:
                  </p>
                  <ul className="legal-section__list legal-contact-list">
                    <li><strong>Email:</strong> legal@investmentfriend.com</li>
                    <li><strong>Phone:</strong> +233 (0) 55 123 4567</li>
                    <li><strong>Address:</strong> Accra, Ghana</li>
                  </ul>
                  <div className="legal-contact-links">
                    <Link to="/privacy">Read our Privacy Policy</Link>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
