import React from 'react';
import { Link } from 'react-router-dom';
import homeHeroImg from '../assets/home-hero-bg.jpg';
import './HeroV2.css';

export default function HeroV2({
  imageSrc = homeHeroImg,
  headlineText = "Your money. Your future.",
  headlineAccent = "Now you know.",
  subtext = "Investment Friend is Ghana's financial education and advisory platform. We teach you how to invest, budget, and build wealth with guidance that actually makes sense.",
  primaryButtonText = "Explore Classes",
  primaryButtonLink = "/service/classes",
  secondaryButtonText = "Book a Coaching Session",
  secondaryButtonLink = "/service/coaching"
}) {
  return (
    <section className="hero-v2">
      <div className="hero-v2__bg-container">
        <img src={imageSrc} alt="Hero Background" className="hero-v2__bg-img" />
        <div className="hero-v2__overlay"></div>
      </div>

      <div className="container hero-v2__container">
        <div className="hero-v2__content">
          <h1 className="hero-v2__headline anim-fade-up" style={{ animationDelay: '0.4s' }}>
            {headlineText}<br />
            <span className="gold-text">{headlineAccent}</span>
          </h1>

          <p className="hero-v2__subtext anim-fade-up" style={{ animationDelay: '0.6s' }}>
            {subtext}
          </p>

          <div className="hero-v2__cta-group anim-fade-up" style={{ animationDelay: '0.8s' }}>
            <Link to={primaryButtonLink} className="btn-v2 btn-v2--primary">
              <span>{primaryButtonText}</span>
              <span className="btn-v2__icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </Link>
            <Link to={secondaryButtonLink} className="btn-v2 btn-v2--secondary">
              <span>{secondaryButtonText}</span>
              <span className="btn-v2__icon-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom design accent: scroll cue + animated gold hairline */}
      <a href="#value" className="hero-v2__scroll-cue" aria-label="Scroll to content">
        <span className="hero-v2__scroll-text">Scroll</span>
        <span className="hero-v2__scroll-track">
          <span className="hero-v2__scroll-dot" />
        </span>
      </a>
      <div className="hero-v2__gold-line" aria-hidden="true" />
    </section>
  );
}
