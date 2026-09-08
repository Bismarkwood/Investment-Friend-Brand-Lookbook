import React from 'react';
import { Link } from 'react-router-dom';
import homeHeroImg from '../assets/home-hero-bg.jpg';
import './Hero.css';

export default function Hero({
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
    <section className="hero">
      <div className="hero__bg-container">
        <img src={imageSrc} alt="Hero Background" className="hero__bg-img" />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__headline anim-fade-up" style={{ animationDelay: '0.4s' }}>
            {headlineText}<br />
            <span className="gold-text">{headlineAccent}</span>
          </h1>

          <p className="hero__subtext anim-fade-up" style={{ animationDelay: '0.6s' }}>
            {subtext}
          </p>

          <div className="hero__cta-group anim-fade-up" style={{ animationDelay: '0.8s' }}>
            <Link to={primaryButtonLink} className="btn btn--primary">
              <span>{primaryButtonText}</span>
              <span className="btn__icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </Link>
            <Link to={secondaryButtonLink} className="btn btn--secondary">
              <span>{secondaryButtonText}</span>
              <span className="btn__icon-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
