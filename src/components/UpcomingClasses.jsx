import React, { useEffect, useRef, useState } from 'react';
import ClassApplyModal from './ClassApplyModal';
import './UpcomingClasses.css';

const CLASSES = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting That Actually Works',
    level: 'Beginner',
    date: 'Oct 12, 2026',
    time: '10:00 AM GMT',
    duration: '2 hours',
    format: 'Online (Zoom)',
    seats: 'Limited seats',
    price: 'Free',
    description: 'Build a realistic budget around your real spending, and set up a system that keeps saving automatic.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'investing-101',
    title: 'Investing 101: Your First Steps',
    level: 'Beginner',
    date: 'Oct 26, 2026',
    time: '5:00 PM GMT',
    duration: '2.5 hours',
    format: 'Online (Zoom)',
    seats: 'Filling fast',
    price: 'GHS 150',
    description: 'Understand T-Bills, mutual funds and the stock market, and make your first investment with confidence.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'wealth-building',
    title: 'Building Long-Term Wealth',
    level: 'Intermediate',
    date: 'Nov 09, 2026',
    time: '10:00 AM GMT',
    duration: '3 hours',
    format: 'In person · Accra',
    seats: 'Limited seats',
    price: 'GHS 300',
    description: 'Move from saving to strategy: diversification, passive income, and a plan you can actually follow.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function UpcomingClasses() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="classes"
      className={`upcoming ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header section-header--left anim-fade-up">
          <span className="section-header__eyebrow">Upcoming Classes</span>
          <h2 className="section-header__title">Apply for a class</h2>
          <p className="section-header__description">
            Our classes run in small groups so everyone gets attention. Pick a session below and reserve your seat.
          </p>
        </div>

        <div className="upcoming__grid">
          {CLASSES.map((cls, i) => (
            <article
              key={cls.id}
              className="class-card anim-fade-up"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="class-card__media">
                <img src={cls.image} alt={cls.title} loading="lazy" />
                <span className="class-card__price">{cls.price}</span>
              </div>

              <div className="class-card__body">
                <div className="class-card__date">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  {cls.date}<span className="class-card__dot">·</span>{cls.time}
                </div>

                <h3 className="class-card__title">{cls.title}</h3>
                <p className="class-card__desc">{cls.description}</p>

                <button
                  type="button"
                  className="class-card__apply"
                  onClick={() => setSelectedClass(cls)}
                >
                  <span>Apply</span>
                  <span className="class-card__apply-icon">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ClassApplyModal
        isOpen={Boolean(selectedClass)}
        classInfo={selectedClass}
        onClose={() => setSelectedClass(null)}
      />
    </section>
  );
}
