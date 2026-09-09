import React from 'react';
import './ClubBento.css';

const bentoCards = [
  {
    id: 1,
    title: 'Placeholder 1',
    desc: 'Description for card 1. Replace with actual text and image later.',
    className: 'bento-card--1',
    // imageUrl: 'path/to/image.jpg'
  },
  {
    id: 2,
    title: 'Placeholder 2',
    desc: 'Description 2',
    className: 'bento-card--2',
  },
  {
    id: 3,
    title: 'Placeholder 3',
    desc: 'Description 3',
    className: 'bento-card--3',
  },
  {
    id: 4,
    title: 'Placeholder 4',
    desc: 'Description 4',
    className: 'bento-card--4',
  },
  {
    id: 5,
    title: 'Placeholder 5',
    desc: 'Description 5',
    className: 'bento-card--5',
  }
];

export default function ClubBento() {
  return (
    <section className="bento-section">
      <div className="bento-container">
        <div className="bento-header anim-fade-up">
          <h2 className="bento-title">Exclusive Club Access</h2>
          <p className="bento-subtitle">
            Explore the premium perks and tailored environments designed for your financial growth.
          </p>
        </div>

        <div className="bento-grid">
          {bentoCards.map((card, index) => (
            <a 
              href="#club-detail" 
              key={card.id} 
              className={`bento-card ${card.className} anim-fade-up`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Background Layer */}
              <div 
                className="bento-card__bg" 
                style={card.imageUrl ? { backgroundImage: `url(${card.imageUrl})` } : {}}
              />
              
              {/* Dark Overlay for readability */}
              <div className="bento-card__overlay" />
              
              {/* Content */}
              <div className="bento-card__content">
                <h3 className="bento-card__title">{card.title}</h3>
                <p className="bento-card__desc">{card.desc}</p>
              </div>

              {/* Hover Arrow */}
              <div className="bento-card__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
