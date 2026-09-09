import React, { useEffect, useState } from 'react';
import './LegalPages.css';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = useState('what-are-cookies');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Mock preferences state
  const [preferences, setPreferences] = useState({
    strictlyNecessary: true, // Always true
    performance: true,
    functional: true
  });
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Get the one closest to the top of the viewport
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
      // Offset for fixed navbar + spacing
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileTocOpen(false);
      setActiveSection(id);
    }
  };

  const handleSavePreferences = () => {
    setSaveMessage('Preferences saved successfully.');
    setTimeout(() => {
      setSaveMessage('');
      setShowPreferences(false);
    }, 2000);
  };

  const sectionsList = [
    { id: 'what-are-cookies', title: 'What Are Cookies?' },
    { id: 'how-we-use', title: 'How We Use Cookies' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
    { id: 'third-party', title: 'Third-Party Cookies' },
    { id: 'managing-cookies', title: 'Managing Your Preferences' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <main className="page-legal anim-site-enter">
      <SEO
        title="Cookie Policy | Investment Friend"
        description="Read the Investment Friend Cookie Policy to understand how we use cookies and similar technologies on our platform."
        path="/cookies"
      />

      <div className="legal-container container">
        {/* Inset Intro Card */}
        <section className="legal-intro-card anim-fade-up">
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link> <span className="legal-breadcrumb-sep">/</span> 
            <span>Legal</span> <span className="legal-breadcrumb-sep">/</span> 
            <span className="legal-breadcrumb-current">Cookie Policy</span>
          </div>
          
          <h1 className="legal-intro-card__title">Cookie Policy</h1>
          <p className="legal-intro-card__desc">
            Understand how cookies are used on our website and how to manage your preferences.
          </p>
          
          <div className="legal-intro-card__bottom">
            <p className="legal-intro-card__date">Last updated: September 2026</p>
            <button className="legal-btn-primary" onClick={() => setShowPreferences(true)}>
              Manage cookie preferences
            </button>
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
              
              <div id="what-are-cookies" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">1.</span> What Are Cookies?</h2>
                <p className="legal-section__text">
                  Cookies are small text files that are placed on your computer, smartphone, or other devices when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
                <p className="legal-section__text">
                  At Investment Friend, we use cookies and similar tracking technologies to track activity on our platform, hold certain information, and provide a tailored and improved financial education experience.
                </p>
              </div>

              <div id="how-we-use" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">2.</span> How We Use Cookies</h2>
                <p className="legal-section__text">
                  We use cookies for several reasons, including:
                </p>
                <ul className="legal-section__list">
                  <li><strong>Essential functionality:</strong> To allow you to navigate and use key features on our site, such as accessing secure member areas of the Investment Club.</li>
                  <li><strong>Performance and analytics:</strong> To analyze how our visitors use our website and to monitor website performance. This allows us to provide a high-quality experience by customizing our offering and quickly identifying and fixing any issues.</li>
                  <li><strong>Personalization:</strong> To remember your preferences (such as your preferred language or location) and to provide enhanced, more personal features.</li>
                </ul>
              </div>

              <div id="types-of-cookies" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">3.</span> Types of Cookies We Use</h2>
                <p className="legal-section__text">
                  Below is a detailed breakdown of the different categories of cookies we deploy on our platform.
                </p>
                
                <div className="legal-table-wrapper">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Purpose</th>
                        <th>Control</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Strictly Necessary</strong></td>
                        <td>Essential for the website to function (e.g., login sessions, security). They are usually only set in response to actions made by you.</td>
                        <td>Always active</td>
                      </tr>
                      <tr>
                        <td><strong>Performance</strong></td>
                        <td>Allows us to count visits and traffic sources so we can measure and improve the performance of our site.</td>
                        <td>User preference</td>
                      </tr>
                      <tr>
                        <td><strong>Functional</strong></td>
                        <td>Enables the website to provide enhanced functionality and personalization based on your past interactions.</td>
                        <td>User preference</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="third-party" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">4.</span> Third-Party Cookies</h2>
                <p className="legal-section__text">
                  In some special cases, we also use cookies provided by trusted third parties. For example, we use Google Analytics to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit.
                </p>
                <p className="legal-section__text">
                  We also use social media buttons and plugins on this site that allow you to connect with your social network in various ways. For these to work, social media platforms will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                </p>
              </div>

              <div id="managing-cookies" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">5.</span> Managing Your Preferences</h2>
                <p className="legal-section__text">
                  You have the right to decide whether to accept or reject non-essential cookies. You can manage your preferences directly on our website using the preference panel.
                </p>
                <div style={{ marginTop: '24px', marginBottom: '32px' }}>
                  <button className="legal-btn-primary" onClick={() => setShowPreferences(true)}>
                    Manage cookie preferences
                  </button>
                </div>
                <p className="legal-section__text">
                  Alternatively, you can set or amend your web browser controls to accept or refuse cookies entirely. If you choose to reject strictly necessary cookies through your browser, you may still use our website, though your access to some functionality and secure areas may be severely restricted.
                </p>
              </div>

              <div id="contact" className="legal-section">
                <h2 className="legal-section__title"><span className="legal-section__num">6.</span> Contact Us</h2>
                <div className="legal-contact-panel">
                  <p className="legal-section__text" style={{ marginBottom: '16px' }}>
                    If you have any questions about our use of cookies or other technologies, please reach out to us:
                  </p>
                  <ul className="legal-section__list legal-contact-list">
                    <li><strong>Email:</strong> hello@investmentfriend.com</li>
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

      {/* Cookie Preferences Mockup Modal */}
      {showPreferences && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <div className="cookie-modal__header">
              <h2>Cookie Preferences</h2>
              <button className="cookie-modal__close" onClick={() => setShowPreferences(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="cookie-modal__body">
              <p className="cookie-modal__desc">Manage your cookie preferences below. Essential cookies cannot be disabled as they are required for the site to function properly.</p>
              
              <div className="cookie-toggle-group">
                <div className="cookie-toggle-row">
                  <div>
                    <h4>Strictly Necessary</h4>
                    <p>Required for core functionality. Always enabled.</p>
                  </div>
                  <div className="cookie-toggle cookie-toggle--disabled cookie-toggle--on">
                    <div className="cookie-toggle__knob"></div>
                  </div>
                </div>
                
                <div className="cookie-toggle-row">
                  <div>
                    <h4>Performance & Analytics</h4>
                    <p>Helps us improve our website by analyzing how you use it.</p>
                  </div>
                  <button 
                    className={`cookie-toggle ${preferences.performance ? 'cookie-toggle--on' : ''}`}
                    onClick={() => setPreferences({...preferences, performance: !preferences.performance})}
                    aria-pressed={preferences.performance}
                  >
                    <div className="cookie-toggle__knob"></div>
                  </button>
                </div>
                
                <div className="cookie-toggle-row">
                  <div>
                    <h4>Functional & Personalization</h4>
                    <p>Allows the website to remember choices you make.</p>
                  </div>
                  <button 
                    className={`cookie-toggle ${preferences.functional ? 'cookie-toggle--on' : ''}`}
                    onClick={() => setPreferences({...preferences, functional: !preferences.functional})}
                    aria-pressed={preferences.functional}
                  >
                    <div className="cookie-toggle__knob"></div>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="cookie-modal__footer">
              {saveMessage && <span className="cookie-modal__msg">{saveMessage}</span>}
              <button className="legal-btn-primary" onClick={handleSavePreferences}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
