import React, { useEffect, useState } from 'react';
import './LegalPages.css';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('information-collection');
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
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'information-sharing', title: 'Information Sharing' },
    { id: 'data-security', title: 'Data Security & Retention' },
    { id: 'your-rights', title: 'Your Rights & Choices' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <main className="page-legal anim-site-enter">
      <SEO
        title="Privacy Policy | Investment Friend"
        description="Read the Investment Friend Privacy Policy to understand how we collect, use, and protect your personal information."
        path="/privacy"
      />

      <div className="legal-container container">
        {/* Inset Intro Card */}
        <section className="legal-intro-card anim-fade-up">
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link> <span className="legal-breadcrumb-sep">/</span> 
            <span>Legal</span> <span className="legal-breadcrumb-sep">/</span> 
            <span className="legal-breadcrumb-current">Privacy Policy</span>
          </div>
          
          <h1 className="legal-intro-card__title">Privacy Policy</h1>
          <p className="legal-intro-card__desc">
            We are committed to protecting your personal data and respecting your privacy. 
            This policy outlines how we handle your information.
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
              
              <div id="information-collection" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">1.</span> Information We Collect</h2>
                <p className="legal-section__text">
                  We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or participate in activities on the website (such as joining the Investment Club).
                </p>
                <p className="legal-section__text">
                  The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:
                </p>
                <ul className="legal-section__list">
                  <li><strong>Personal Data:</strong> First name, last name, email address, phone number, and location.</li>
                  <li><strong>Financial Data:</strong> General information about your investment goals and financial interests to provide targeted coaching.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, operating system, and interactions with our platform.</li>
                </ul>
              </div>

              <div id="how-we-use" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">2.</span> How We Use Your Information</h2>
                <p className="legal-section__text">
                  We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
                <ul className="legal-section__list">
                  <li><strong>To facilitate account creation and logon process.</strong></li>
                  <li><strong>To fulfill and manage your orders and subscriptions.</strong></li>
                  <li><strong>To deliver services to the user:</strong> We may use your information to provide you with the requested financial coaching or club membership benefits.</li>
                  <li><strong>To send administrative information to you:</strong> We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                </ul>
              </div>

              <div id="information-sharing" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">3.</span> Information Sharing</h2>
                <p className="legal-section__text">
                  We only share and disclose your information in the following situations:
                </p>
                <ul className="legal-section__list">
                  <li><strong>Compliance with Laws:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                  <li><strong>Vital Interests and Legal Rights:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities.</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                </ul>
              </div>

              <div id="data-security" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">4.</span> Data Security & Retention</h2>
                <p className="legal-section__text">
                  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                </p>
                <p className="legal-section__text">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                </p>
              </div>

              <div id="your-rights" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">5.</span> Your Rights & Choices</h2>
                <p className="legal-section__text">
                  Depending on your region, you may have certain rights regarding your personal information, including the right to:
                </p>
                <ul className="legal-section__list">
                  <li>Request access and obtain a copy of your personal information.</li>
                  <li>Request rectification or erasure of your personal information.</li>
                  <li>Restrict the processing of your personal information.</li>
                  <li>Object to the processing of your personal information.</li>
                </ul>
                <p className="legal-section__text">
                  To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
              </div>

              <div id="contact" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">6.</span> Contact Us</h2>
                <div className="legal-contact-panel">
                  <p className="legal-section__text" style={{ marginBottom: '16px' }}>
                    If you have questions or comments about this policy, you may email us or contact us by post at:
                  </p>
                  <ul className="legal-section__list legal-contact-list">
                    <li><strong>Email:</strong> legal@investmentfriend.com</li>
                    <li><strong>Phone:</strong> +233 (0) 55 123 4567</li>
                    <li><strong>Address:</strong> Accra, Ghana</li>
                  </ul>
                  <div className="legal-contact-links">
                    <Link to="/terms">Read our Terms of Service</Link>
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
