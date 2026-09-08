import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

// Custom hook for the count-up animation
const useCountUp = (end, duration = 2000, startAnimating = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimating) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo) for a nice deceleration
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it lands exactly on the end number
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startAnimating]);

  return count;
};

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Hook up the counters
  const investorsCount = useCountUp(2500, 2500, isVisible);
  const valueCount = useCountUp(15, 2000, isVisible);
  const yearsCount = useCountUp(10, 1500, isVisible);

  return (
    <section className={`stats-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="container stats__container">
        
        <div className="stats__eyebrow anim-fade-up">
          OUR IMPACT
        </div>

        <div className="stats__grid">
          
          <div className="stats__col anim-fade-up delay-1">
            <div className="stats__number">
              {investorsCount}<span className="stats__accent">+</span>
            </div>
            <div className="stats__label">Investors supported</div>
          </div>

          <div className="stats__col anim-fade-up delay-2">
            <div className="stats__number">
              <span className="stats__accent-prefix">GHS </span>{valueCount}<span className="stats__accent">M+</span>
            </div>
            <div className="stats__label">Investment value facilitated</div>
          </div>

          <div className="stats__col anim-fade-up delay-3">
            <div className="stats__number">
              {yearsCount}<span className="stats__accent">+ Years</span>
            </div>
            <div className="stats__label">Combined financial experience</div>
          </div>

        </div>
      </div>
    </section>
  );
}
