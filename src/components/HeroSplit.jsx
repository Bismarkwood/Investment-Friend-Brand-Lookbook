import React from 'react';
import './HeroSplit.css';

export default function HeroSplit({ 
  title, 
  description, 
  image, 
  imageAlt = "Hero image",
  primaryBtnText = "Get Started",
  primaryBtnLink = "#join",
  secondaryBtnText = "Learn More",
  secondaryBtnLink = "#learn-more"
}) {
  return (
    <section className="hero-split">
      <div className="container">
        <div className="hero-split__top anim-fade-up">
          <h1 className="hero-split__headline">
            {title}
          </h1>
          <div className="hero-split__desc-wrap">
            <p className="hero-split__desc">
              {description}
            </p>
            <div className="hero-split__actions">
              {primaryBtnText && (
                <a href={primaryBtnLink} className="hero-btn hero-btn--primary">
                  <span>{primaryBtnText}</span>
                  <span className="hero-btn__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </span>
                </a>
              )}
              {secondaryBtnText && (
                <a href={secondaryBtnLink} className="hero-btn hero-btn--secondary">
                  <span>{secondaryBtnText}</span>
                  <span className="hero-btn__icon-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-split__image-wrap anim-fade-up" style={{ animationDelay: '0.3s' }}>
        <img src={image} alt={imageAlt} className="hero-split__image" />
      </div>
    </section>
  );
}
