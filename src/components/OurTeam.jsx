import React, { useRef, useEffect, useState } from 'react';
import './OurTeam.css';
import seyramProfileImg from '../assets/seyram-profile.jpg';

const TEAM = [
  {
    id: 1,
    name: 'Seyram',
    image: seyramProfileImg,
  },
  {
    id: 2,
    name: 'Mimi',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
  }
];

export default function OurTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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
    <section className={`team-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef} id="team">
      <div className="container">
        
        {/* Top Header */}
        <div className="section-header section-header--left anim-fade-up" style={{marginBottom: '48px'}}>
          <span className="section-header__eyebrow">Our Team</span>
          <h2 className="section-header__title">Meet the Team Behind Investment Friend</h2>
          <p className="section-header__description">Get to know the experts who are passionate about guiding your financial journey in the Ghanaian market.</p>
        </div>

        {/* Team Grid */}
        <div className="team__grid-container anim-fade-up anim-delay-1">
          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card__image-wrapper">
                  <img src={member.image} alt={member.name} className="team-card__image" />
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__name">{member.name}</h3>
                  <div className="team-card__socials">
                    <a href="#" className="team-card__social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="team-card__social-link" aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
