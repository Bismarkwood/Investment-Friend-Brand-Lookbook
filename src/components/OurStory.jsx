import React, { useEffect, useRef, useState } from 'react';
import storyCardImg from '../assets/our-story-card.jpg';
import './OurStory.css';

export default function OurStory() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`story-timeline ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
      id="story"
    >
      <div className="container story-timeline__container">
        
        <div className="section-header">
          <span className="section-header__eyebrow">Our Story</span>
          <h2 className="section-header__title">
            We started because our friends needed help.
          </h2>
        </div>

        <div className="story-timeline__grid-wrapper">
          {/* The connecting horizontal line */}
          <div className="story-timeline__line"></div>

          <div className="story-timeline__grid">
            
            {/* Chapter 1 */}
            <div className="timeline-card timeline-card--1">
              <div className="timeline-card__node"></div>
              <h3 className="timeline-card__title">The Catalyst</h3>
              <p className="timeline-card__text">
                During COVID-19, jobs disappeared overnight. It became clear that people were earning money, but lacked the practical financial knowledge required to build lasting security.
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="timeline-card timeline-card--2">
              <div className="timeline-card__node"></div>
              <h3 className="timeline-card__title">The Action</h3>
              <p className="timeline-card__text">
                Seyram began sharing her financial expertise with friends and family. The response was immediate—people didn't just want raw information, they wanted trusted guidance.
              </p>
            </div>

            {/* Chapter 3 */}
            <div className="timeline-card timeline-card--3">
              <div className="timeline-card__node"></div>
              <h3 className="timeline-card__title">The Connection</h3>
              <p className="timeline-card__text">
                Seyram and Mimi connected over a shared frustration: vital financial knowledge simply wasn't reaching the young professionals and women who needed it most.
              </p>
            </div>

            {/* Chapter 4 */}
            <div className="timeline-card timeline-card--4">
              <div className="timeline-card__node"></div>
              <h3 className="timeline-card__title">The Mission</h3>
              <p className="timeline-card__text">
                Today, Investment Friend bridges that gap with classes, coaching, and investment clubs, empowering our growing community to finally say, "Now I understand."
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Full Screen Image Beneath (Outside Container) */}
      <div className="story-timeline__full-image-wrapper">
        <img 
          src={storyCardImg} 
          alt="Team collaboration" 
          className="story-timeline__full-image"
        />
      </div>
    </section>
  );
}
