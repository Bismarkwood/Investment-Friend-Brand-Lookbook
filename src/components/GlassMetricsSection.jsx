import React, { useEffect, useRef, useState } from 'react';
import './GlassMetricsSection.css';
import whatsIncludedBg from '../assets/WHAT\'S INCLUDED.avif';

export default function GlassMetricsSection({
  eyebrow = "WHAT'S INCLUDED",
  heading = "Everything provided in your 1-on-1 coaching experience",
  bgImage = whatsIncludedBg,
  items = [
    {
      title: "Financial Assessment",
      description: "A complete audit of your current income, expenses, debts, and assets."
    },
    {
      title: "Tailored Financial Plan",
      description: "A custom strategy for budgeting, saving, investing, and debt payoff."
    },
    {
      title: "Local Market Guidance",
      description: "Direct insights on vetted investment opportunities in Ghana."
    },
    {
      title: "Licensed Referrals",
      description: "Introductions to SEC-licensed institutions and trusted platforms."
    },
    {
      title: "Post-Session Resources",
      description: "Actionable guides, financial templates, and next steps after your call."
    },
    {
      title: "Smart Reminders",
      description: "Automated email and SMS alerts so you never miss an appointment."
    }
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`glass-metrics-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      
      {/* Background Image without overlay */}
      {bgImage && (
        <div className="glass-metrics__bg-wrap">
          <img src={bgImage} alt="" className="glass-metrics__bg-img" />
        </div>
      )}
      
      <div className="container glass-metrics__container">
        
        {/* Header Block */}
        <div className="glass-metrics__header-wrap anim-fade-up">
          {eyebrow && (
            <span className="section-header__eyebrow glass-metrics__eyebrow">
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2 className="glass-metrics__heading">
              {heading}
            </h2>
          )}
        </div>

        {/* 6 Compact Glassmorphism Cards */}
        {items && items.length > 0 && (
          <div className="glass-metrics__grid anim-fade-up delay-1">
            {items.map((item, idx) => (
              <div key={idx} className="glass-metrics__card">
                {item.title && <h3 className="glass-metrics__card-title">{item.title}</h3>}
                {item.description && (
                  <p className="glass-metrics__card-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
