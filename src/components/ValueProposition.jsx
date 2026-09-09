import React, { useEffect, useRef, useState } from 'react';
import './ValueProposition.css';

export default function ValueProposition() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only animate once when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
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

  const pillars = [
    {
      id: '01',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ),
      title: 'We teach what we practise',
      desc: 'Our team includes professionals with direct experience in investment management, financial advisory, and institutional finance. We do not teach theory. We teach what works because we have done it ourselves. We have access to investment opportunities and guidance that most people outside the industry never hear about. We share that access with our community.'
    },
    {
      id: '02',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      ),
      title: 'We speak your language',
      desc: 'When we explain compound interest, we use scenarios you recognise. When we talk about investment options, we talk about what is actually available to you in Ghana. Treasury Bills, mutual funds, stocks, fixed deposits. Real options. Real numbers. Real language.'
    },
    {
      id: '03',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
      title: 'We make it personal',
      desc: 'A 25-year-old starting their first job needs different guidance than a 40-year-old rethinking their financial plan. We meet you where you are. Our coaching sessions start with your situation, your income, your goals, and your concerns. Then we build from there.'
    },
    {
      id: '04',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      ),
      title: 'We connect you to opportunities',
      desc: 'Through our relationships with SEC-licensed institutions and financial service providers, we point you toward investment opportunities and platforms you might not discover on your own. This is not generic advice. This is access.'
    }
  ];

  return (
    <section 
      className={`value-prop ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="value-prop__container container">
        
        <div className="section-header anim-fade-up" data-reveal="up">
          <span className="section-header__eyebrow">The Value</span>
          <h2 className="section-header__title">Why Investment Friend</h2>
          <p className="section-header__description">
            We deliver practical, real-world financial education and guidance designed specifically for you.
          </p>
        </div>

        {/* Middle Section: The Pillars */}
        <div className="vp-pillars-row">
          {pillars.map((pillar, index) => (
            <div className={`vp-pillar-card anim-fade-up delay-${index + 3}`} key={pillar.id}
              data-reveal="up"
              data-delay={index + 1}
            >
              <div className="vp-pillar-icon">
                {pillar.icon}
              </div>
              <h3 className="vp-pillar-title">{pillar.title}</h3>
              <p className="vp-pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
