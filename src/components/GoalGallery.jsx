import React, { useEffect, useRef, useState } from 'react';
import './GoalGallery.css';
import leftCardImg from '../assets/coaching-card.jpg';
import centerCardImg from '../assets/seyram-profile.jpg';
import rightCardImg from '../assets/our-story-card.jpg';

export default function GoalGallery({
  eyebrow = "WHAT A COACHING SESSION LOOKS LIKE",
  heading = "Every session is a practical, one-on-one conversation designed to understand your finances, clarify your goals, and create a plan that works for your real life.",
  leftCard = {
    image: leftCardImg,
    alt: "Understand Your Financial Picture",
    title: "Understand Your Financial Picture",
    description: "We begin by reviewing your income, expenses, debts, financial goals, and any concerns you may have. This gives us a clear picture of where you are today."
  },
  centerCard = {
    image: centerCardImg,
    alt: "Build a Plan Around You",
    title: "Build a Plan Around You",
    description: "Together, we create a personalised and realistic financial plan, not a generic template. Every recommendation reflects your lifestyle, priorities, and ambitions."
  },
  rightCard = {
    image: rightCardImg,
    alt: "Navigate with Local Expertise",
    title: "Navigate with Local Expertise",
    description: "Our coaches bring experience in investment management, financial planning, and institutional finance. They understand Ghana’s financial landscape and can help you identify suitable products and trustworthy institutions."
  }
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`goal-gallery-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="container goal__container">
        
        {/* Top Header Layout: Eyebrow Left, Heading Right */}
        <div className="goal__header anim-fade-up">
          <span className="section-header__eyebrow goal__eyebrow">{eyebrow}</span>
          <p className="goal__heading">{heading}</p>
        </div>

        {/* 3-Card Asymmetrical Grid */}
        <div className="goal__grid anim-fade-up delay-1">
          
          {/* Left Card */}
          <div className="goal__card goal__card--left">
            <div className="goal__image-wrap">
              <img src={leftCard.image} alt={leftCard.alt} className="goal__image" />
            </div>
            <div className="goal__card-text">
              {leftCard.title && <h4 className="goal__card-title">{leftCard.title}</h4>}
              {(leftCard.description || leftCard.caption) && (
                <p className="goal__caption">{leftCard.description || leftCard.caption}</p>
              )}
            </div>
          </div>

          {/* Center Featured Card with Dark Moving Gradient Overlay */}
          <div className="goal__card goal__card--center">
            <div className="goal__image-wrap goal__image-wrap--overlay">
              <img src={centerCard.image} alt={centerCard.alt} className="goal__image" />
              <div className="goal__overlay-gradient" />
              <div className="goal__overlay-content">
                {centerCard.title && <h4 className="goal__overlay-title">{centerCard.title}</h4>}
                {(centerCard.description || centerCard.caption) && (
                  <p className="goal__overlay-desc">{centerCard.description || centerCard.caption}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="goal__card goal__card--right">
            <div className="goal__image-wrap">
              <img src={rightCard.image} alt={rightCard.alt} className="goal__image" />
            </div>
            <div className="goal__card-text">
              {rightCard.title && <h4 className="goal__card-title">{rightCard.title}</h4>}
              {(rightCard.description || rightCard.caption) && (
                <p className="goal__caption">{rightCard.description || rightCard.caption}</p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
