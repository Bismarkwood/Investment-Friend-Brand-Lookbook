import React, { useEffect, useRef, useState } from 'react';
import './OurApproach.css';

const CARDS = [
  {
    id: '01',
    title: 'Practical & Local',
    description: 'Our teaching style is beginner-friendly, uses examples from everyday life in Ghana, and focuses on practical steps you can take immediately.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Core Values',
    description: 'We value relatability over formality, clarity over complexity, and community over competition.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'The Vision',
    description: '"We want people to feel like they are getting advice from a friend who happens to work in finance."',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop'
  }
];

export default function OurApproach() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
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

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -750, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 750, behavior: 'smooth' });
    }
  };

  return (
    <section className={`approach-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Top Row: Header (Left) + Nav Buttons (Right) */}
        <div className="approach__top-row anim-fade-up">
          <div className="section-header section-header--left">
            <span className="section-header__eyebrow">The Difference</span>
            <h2 className="section-header__title">Our Approach</h2>
            <p className="section-header__description">
              We are not a traditional financial institution. We do not manage your money. We grow your understanding of it.
            </p>
          </div>
          
          <div className="approach__nav-btns">
            <button className="nav-btn" onClick={scrollLeft} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="nav-btn" onClick={scrollRight} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="approach__slider-container anim-fade-up delay-1">
          <div className="approach__slider" ref={sliderRef}>
            {CARDS.map((card) => (
              <div key={card.id} className="approach-slide">
                <img src={card.image} alt={card.title} className="approach-slide__bg" />
                <div className="approach-slide__overlay"></div>
                
                <div className="approach-slide__content">
                  <h3 className="approach-slide__title">{card.title}</h3>
                  <p className="approach-slide__desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
