import React, { useEffect, useRef, useState } from 'react';
import './ImpactSection.css';

export default function ImpactSection({
  eyebrow = "OUR IMPACT",
  quote = "Financial Coaching pairs ambitious individuals with a partner who has run this exact playbook before — someone who asks the harder question in the room, not after it. Sessions are built around the decisions you are actually facing this week, not abstract frameworks.",
  stats = [
    { value: "140+", label: "CLIENTS COACHED" },
    { value: "92%", label: "ACHIEVED FINANCIAL GOALS" },
    { value: "4.9", label: "AVG. SESSION RATING" }
  ]
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`impact-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="container impact__container">
        
        {eyebrow && (
          <span className="section-header__eyebrow impact__eyebrow anim-fade-up">
            {eyebrow}
          </span>
        )}

        {quote && (
          <blockquote className="impact__quote anim-fade-up delay-1">
            {quote}
          </blockquote>
        )}

        {stats && stats.length > 0 && (
          <div className="impact__stats-grid anim-fade-up delay-2">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="impact__stat-col">
                  <div className="impact__stat-value">{stat.value}</div>
                  <div className="impact__stat-label">{stat.label}</div>
                </div>
                {idx < stats.length - 1 && <div className="impact__divider" />}
              </React.Fragment>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
