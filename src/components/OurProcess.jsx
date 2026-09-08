import React, { useState } from 'react';
import './OurProcess.css';
import whatDrivesUsImg from '../assets/what-drives-us-bg.jpg';

const TABS = [
  {
    title: 'Financial literacy changes families',
    description: 'When one person learns to manage money well, the impact reaches their children, their parents, their community, and eventually their country. We are not just teaching individuals. We are building a culture of financial confidence in Ghana.',
  },
  {
    title: 'It is never too late',
    description: 'Some of our most impactful work is with people who feel they have missed the window. They have not. Financial growth does not have an age limit. The best time to start was ten years ago. The second best time is today.',
  },
  {
    title: 'Expertise should be accessible',
    description: 'Our team has institutional experience, industry connections, and professional knowledge that most people do not have access to. We believe that knowledge should not stay behind closed doors. It should be shared, clearly and generously.',
  }
];

export default function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="process-new">
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">What Drives Us</span>
          <h2 className="section-header__title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', maxWidth: '650px', marginBottom: '0' }}>
            Empowering you to build lasting wealth through clear, actionable financial education.
          </h2>
        </div>
      </div>

      <div className="container process-new__media-container">
        <div className="process-new__media">
          <img 
            src={whatDrivesUsImg} 
            alt="What Drives Us" 
            className="process-new__bg" 
          />
          <div className="process-new__overlay"></div>

          <div className="process-new__tabs-wrapper">
            <div className="process-new__tabs">
              {TABS.map((tab, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`process-new__tab ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h4 className="process-new__tab-title">{tab.title}</h4>
                    <div 
                      className="process-new__tab-content"
                      style={{ 
                        maxHeight: isActive ? '200px' : '0', 
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? '16px' : '0'
                      }}
                    >
                      <p className="process-new__tab-desc">{tab.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
