import React from 'react';
import './HowClassesWork.css';

export default function HowClassesWork() {
  const cards = [
    {
      id: 'book',
      title: 'Book and pay in one step',
      desc: 'No complicated registration. Browse classes, pick one, pay through Paystack, and you are confirmed. You will receive an automated email confirmation and reminders before the session.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      id: 'miss',
      title: 'Miss a class? You are covered.',
      desc: 'If you cannot attend a live session, we send you the recording. Paid students always get access to session replays via email.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      )
    },
    {
      id: 'small',
      title: 'Small class sizes',
      desc: 'This is not a webinar with 500 people. Class sizes are kept small so every participant gets attention and can ask questions in real time.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 'phone',
      title: 'Built for your phone',
      desc: "Most of our students browse and book on mobile. The entire experience, from discovery to payment to attending, is optimised for your phone and for Ghana's internet speeds.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="hcw-section">
      <div className="hcw-inner">
        
        <div className="section-header section-header--left anim-fade-up">
          <span className="section-header__eyebrow" style={{ color: 'var(--navy)' }}>THE PROCESS</span>
          <h2 className="section-header__title" style={{ color: 'var(--navy)' }}>How Our Classes Work</h2>
          <p className="section-header__description" style={{ color: 'rgba(0,0,0,0.7)', maxWidth: '800px' }}>
            Investment Friend classes are designed to be practical. Every class uses examples relevant to life in Ghana, covers tools and platforms available in this market, and gives you something you can act on immediately.
          </p>
        </div>

        <div className="hcw-grid">
          {cards.map((card, i) => (
            <div 
              className="hcw-card anim-fade-up" 
              key={card.id} 
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="hcw-card__icon">
                {card.icon}
              </div>
              <h3 className="hcw-card__title">{card.title}</h3>
              <p className="hcw-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
