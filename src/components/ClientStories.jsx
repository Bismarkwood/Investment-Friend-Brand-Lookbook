import React from 'react';
import './ClientStories.css';

const defaultStories = [
  {
    id: 1,
    quote: "Sharper priorities, faster decisions, and a team that finally moved in the same direction.",
    name: "Jessica Mercedes",
    company: "KOKO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    quote: "They helped us turn a messy transition into a clear, structured plan.",
    name: "Maya Bennett",
    company: "Helios",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: "Our company jumped 34% into the future after the collaboration.",
    name: "James Alderton",
    company: "BLUR",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ClientStories({ 
  stories = defaultStories,
  eyebrow = "CLIENT STORIES",
  title = "Real outcomes from teams moving with more clarity.",
  description
}) {

  return (
    <section className="client-stories-section">
      <div className="client-stories__inner">
        <div className="section-header anim-fade-up">
          <span className="section-header__eyebrow">{eyebrow}</span>
          <h2 className="section-header__title">{title}</h2>
          {description && <p className="section-header__description">{description}</p>}
        </div>
        
        <div className="client-stories__grid">
          {stories.map(story => (
            <div className="client-story-card" key={story.id}>
              <div className="client-story-card__bg" style={{ backgroundImage: `url(${story.image})` }}></div>
              <div className="client-story-card__overlay"></div>
              
              <div className="client-story-card__top">
                <div className="client-story-card__play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="client-story-card__logo">{story.company}</div>
              </div>
              
              <div className="client-story-card__bottom">
                <p className="client-story-card__quote">“{story.quote}”</p>
                <p className="client-story-card__name">{story.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
