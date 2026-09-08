import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classesImg from '../assets/about-hero-bg.jpg';
import coachingImg from '../assets/coaching-card.jpg';
import clubsImg from '../assets/exclusive-clubs-card.jpg';
import './Stories.css';

export default function Stories() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stories = [
    {
      id: 'offer-1',
      title: 'Classes and Training',
      desc: 'Live and recorded classes on investing, budgeting, and wealth building, tailored to the Ghanaian market. Book easily via Paystack and access all recordings.',
      cta: 'View upcoming classes',
      link: '/service/classes',
      image: classesImg
    },
    {
      id: 'offer-2',
      title: 'One-on-One Coaching',
      desc: 'Personalised financial coaching with experienced professionals. Choose your coach, pick a time, and confirm your session in one seamless step.',
      cta: 'Book a coaching session',
      link: '/service/coaching',
      image: coachingImg
    },
    {
      id: 'offer-3',
      title: 'Exclusive Clubs',
      desc: 'Join exclusive communities like the Money Movers Club, Stock Club, or Real Estate Circle for specialized content, networking, and expert guidance.',
      cta: 'Explore our clubs',
      link: '/service/club',
      image: clubsImg
    },
    {
      id: 'offer-4',
      title: 'Free Tools and Resources',
      desc: 'Access free budgeting templates, investment calculators, and financial planning resources instantly. No signup required to start building your foundation.',
      cta: 'Access free tools',
      link: '/resources/tools',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop'
    }
  ];

  return (
    <section className={`stories-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="section-header container anim-fade-up">
        <span className="section-header__eyebrow">What We Offer</span>
        <h2 className="section-header__title">Our Services</h2>
        <p className="section-header__description">Explore our tailored educational programs, personalized coaching, and exclusive communities designed to build your financial confidence.</p>
      </div>

      <div className="stories__grid container">
        {stories.map((story, index) => (
          <div className={`story-card anim-fade-up delay-${index + 1}`} key={story.id}>

            {/* Top Image Container */}
            <div className="story-card__image-container">
              <div
                className="story-card__bg-image"
                style={{ backgroundImage: `url(${story.image})` }}
              ></div>
            </div>

            {/* Content beneath the image */}
            <div className="story-card__content">
              <h3 className="story-card__title">{story.title}</h3>
              <p className="story-card__desc">{story.desc}</p>
              
              <Link to={story.link} className="story-card__cta">
                <span>{story.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
