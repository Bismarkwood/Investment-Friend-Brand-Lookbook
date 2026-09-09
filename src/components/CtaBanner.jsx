import React, { useRef, useEffect, useState } from 'react';
import bgImage from '../assets/cta-bg.jpg';
import './CtaBanner.css';

export default function CtaBanner({ 
  title = <>Creating Your<br/>Future With Us</>,
  description = "No matter where you are starting from, the door is open to you at Investment Friend to grow your financial understanding, create positive change, and build lasting wealth.",
  primaryAction = { text: "Book a coaching session", href: "#", icon: "arrow-up-right" },
  secondaryAction = { text: "Join a class", href: "#", icon: "arrow-right" },
  showEmailInput = false
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`cta-banner-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="cta-banner__wrapper">
        <div className="cta-banner__bg-image">
          <img src={bgImage} alt="Creating your future" />
          <div className="cta-banner__overlay"></div>
        </div>
        
        <div className="cta-banner__content">
          <h2 className="cta-banner__title anim-fade-up">
            {title}
          </h2>
          
          <p className="cta-banner__desc anim-fade-up anim-delay-1">
            {description}
          </p>
          
          <div className="cta-banner__actions anim-fade-up anim-delay-2">
            {showEmailInput ? (
              <form className="cta-banner__email-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="cta-banner__email-input" 
                  required 
                />
                <button type="submit" className="cta-banner__btn">
                  Subscribe
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </button>
              </form>
            ) : (
              <>
                {primaryAction && (
                  <a 
                    href={primaryAction.href || "#"} 
                    className="cta-banner__btn"
                    onClick={(e) => {
                      if (primaryAction.onClick) {
                        e.preventDefault();
                        primaryAction.onClick(e);
                      }
                    }}
                  >
                    {primaryAction.text}
                    {primaryAction.icon === 'arrow-up-right' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    )}
                    {primaryAction.icon === 'arrow-right' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    )}
                  </a>
                )}
                
                {secondaryAction && (
                  <a 
                    href={secondaryAction.href || "#"} 
                    className="cta-banner__btn cta-banner__btn--outline"
                    onClick={(e) => {
                      if (secondaryAction.onClick) {
                        e.preventDefault();
                        secondaryAction.onClick(e);
                      }
                    }}
                  >
                    {secondaryAction.text}
                    {secondaryAction.icon === 'arrow-right' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    )}
                    {secondaryAction.icon === 'arrow-up-right' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    )}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
