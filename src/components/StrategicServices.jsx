import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../lib/supabaseClient';
import './StrategicServices.css';
import moneyMoversImg from '../assets/money-movers-bg.jpg';
import stockClubImg from '../assets/Stock Club.jpg';
import realEstateCircleImg from '../assets/real-estate-circle-bg.jpg';
import budgetingImg from '../assets/Budgeting.webp';
import introInvestingImg from '../assets/Introduction to Investing.jpg';

const audienceData = [
  {
    id: 'young-professionals',
    title: 'Young professionals (20-35)',
    desc: 'You are earning consistently but you know you could be doing more with your money. You have heard about investing but it feels complicated and risky. You want someone to explain it clearly and help you take the first step with confidence.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'mid-career-professionals',
    title: 'Mid-career professionals (35-45)',
    desc: 'You have been working for years but your savings do not reflect it. You want to build wealth intentionally, create passive income, and set up your family\'s financial future. You need a plan, not just information.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'women-financial-independence',
    title: 'Women building financial independence',
    desc: 'You want to take control of your finances, make your own investment decisions, and build confidence around money. You want a space that understands your experience and respects your intelligence.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1469&auto=format&fit=crop'
  },
  {
    id: 'anyone-starting-over',
    title: 'Anyone starting over',
    desc: 'Maybe you have made financial decisions you regret. Maybe you are starting from scratch. You need to know it is not too late. You need a clear path forward. That is exactly what we provide.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1571260899304-425070112059?q=80&w=1471&auto=format&fit=crop'
  }
];

const classCurriculumData = [
  {
    id: 'budgeting-money-management',
    title: 'Budgeting and Money Management',
    desc: 'How to track your income and expenses, build a budget that works for your lifestyle, and create a savings plan you will actually follow. We use templates and tools you can start using the same day.',
    bullets: [],
    image: budgetingImg
  },
  {
    id: 'introduction-investing',
    title: 'Introduction to Investing',
    desc: 'What investing actually means, what options are available in Ghana (Treasury Bills, mutual funds, stocks, fixed deposits), how to evaluate risk, and how to start with whatever amount you have. No minimum wealth required.',
    bullets: [],
    image: introInvestingImg
  },
  {
    id: 'building-passive-income',
    title: 'Building Passive Income',
    desc: 'How to create income streams that work while you sleep. We cover investment-based passive income, the power of compound interest, and realistic timelines for growth.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'financial-planning-life-events',
    title: 'Financial Planning for Life Events',
    desc: 'Planning for marriage, children, homeownership, education, and retirement. How to make financial decisions during major life transitions without panic.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'advanced-investment-strategy',
    title: 'Advanced Investment Strategy',
    desc: 'For those who have completed the basics. Portfolio diversification, market analysis, working with financial advisors, and accessing institutional investment opportunities.',
    bullets: [],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop'
  }
];

const clubsData = [
  {
    id: 'money-movers',
    title: 'Money Movers Club',
    desc: 'Money Movers is our flagship community for financial literacy and wealth building. Members get access to exclusive workshops, budgeting challenges, investment breakdowns, and a network of people committed to changing their financial behaviours.',
    bullets: [
      'Monthly exclusive workshops and Q&A sessions',
      'Budgeting and savings challenges with accountability',
      'Investment opportunity breakdowns (what is worth your money right now)',
      'Community forum for questions, wins, and support',
      'Early access to new Investment Friend classes and resources'
    ],
    image: moneyMoversImg
  },
  {
    id: 'stock-club',
    title: 'Stock Club',
    desc: (
      <>
        <strong>For:</strong> Active and aspiring traders who want to learn strategies and share insights.
        <br /><br />
        Stock Club is for people who are ready to go beyond the basics of investing and get into active trading. Members share market insights, discuss strategies, and learn from professionals who trade in both local and international markets.
      </>
    ),
    bullets: [
      'Weekly market analysis and trade ideas',
      'Live trading sessions and walkthroughs',
      'Access to experienced traders for questions and mentorship',
      'Discussion forum for real-time market conversation',
      'Educational content on technical analysis, risk management, and portfolio building'
    ],
    image: stockClubImg
  },
  {
    id: 'real-estate-circle',
    title: 'Real Estate Circle',
    desc: (
      <>
        <strong>For:</strong> People interested in property investment, whether buying their first plot or building a portfolio.
        <br /><br />
        Real Estate Circle brings together people who want to build wealth through property. Members get access to property investment education, market insights specific to Ghana, and a network of people navigating the same opportunities and challenges.
      </>
    ),
    bullets: [
      'Monthly sessions on property investment strategy in Ghana',
      'Market updates on land, residential, and commercial opportunities',
      'Legal and regulatory guidance for property transactions',
      'Network of fellow investors for deal sharing and due diligence',
      'Access to professionals in real estate, law, and finance'
    ],
    image: realEstateCircleImg
  }
];

export default function StrategicServices({
  eyebrow = "Our Audience",
  title = "Who This Is For",
  description = "Investment Friend is designed for young professionals, career builders, and anyone ready to take control of their financial future in Ghana.",
  variant = "audience"
}) {
  const data = variant === "clubs" ? clubsData : variant === "classes" ? classCurriculumData : audienceData;
  const [activeTab, setActiveTab] = useState(data[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const tabsRef = useRef([]);

  const activeContent = data.find(service => service.id === activeTab);

  const handleJoinClick = () => {
    setIsModalOpen(true);
    setSubmitStatus(null);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('applicants')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone, 
            club: activeContent.title 
          }
        ]);

      if (error) {
        console.error('Supabase Error:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' });
        setTimeout(() => {
          handleCloseModal();
        }, 2500);
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateIndicator = React.useCallback(() => {
    const activeIndex = data.findIndex(s => s.id === activeTab);
    const activeEl = tabsRef.current[activeIndex];
    if (activeEl) {
      setIndicatorStyle({
        width: `${activeEl.offsetWidth}px`,
        transform: `translateX(${activeEl.offsetLeft}px)`
      });
    }
  }, [activeTab, data]);

  useEffect(() => {
    updateIndicator();
    
    window.addEventListener('resize', updateIndicator);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateIndicator);
    }
    
    // Fallback delay to ensure layout is complete
    const timeoutId = setTimeout(updateIndicator, 100);

    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timeoutId);
    };
  }, [activeTab, updateIndicator]);

  return (
    <section className="strategic-services-section">
      <div className="container">
        
        <div className="section-header anim-fade-up">
          <span className="section-header__eyebrow">{eyebrow}</span>
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__description">{description}</p>
        </div>

        <div className="ss-tabs-container anim-fade-up delay-2">
          <div className="ss-tabs-nav">
            <div className="ss-tab-bg-indicator" style={indicatorStyle}></div>
            {data.map((service, idx) => (
              <button 
                key={service.id} 
                ref={el => tabsRef.current[idx] = el}
                className={`ss-tab-btn ${activeTab === service.id ? 'is-active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab} className="ss-content-grid ss-tab-content-anim anim-fade-up delay-4">
          <div className="ss-text-card">
            <h3 className="ss-text-title">{activeContent.title}</h3>
            <p className="ss-text-desc">{activeContent.desc}</p>
            <div className="ss-bullets">
              {activeContent.bullets.map((bullet, idx) => (
                <div key={idx} className="ss-bullet-item">{bullet}</div>
              ))}
            </div>
            <button className="ss-cta-btn" onClick={handleJoinClick}>
              Join {activeContent.title}
            </button>
          </div>

          <div 
            className="ss-image-col" 
            style={{ backgroundImage: `url(${activeContent.image})` }}
          >
          </div>
        </div>

        {isModalOpen && createPortal(
          <div className="ss-modal-overlay" onClick={handleCloseModal}>
            <div className="ss-modal-content" onClick={e => e.stopPropagation()}>
              <button className="ss-modal-close" onClick={handleCloseModal}>&times;</button>
              
              <div 
                className="ss-modal-image-col"
                style={{ backgroundImage: `url(${activeContent.image})` }}
              ></div>

              <div className="ss-modal-form-col">
                <h3>Join {activeContent.title}</h3>
                
                {submitStatus === 'success' ? (
                  <div className="ss-success-message" style={{ padding: '24px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', textAlign: 'center' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <h4>Application Received!</h4>
                    <p style={{ marginTop: '8px', fontSize: '14px', marginBottom: 0 }}>We will review your details and get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <p>Please fill out your details below and we will get back to you with the next steps.</p>
                    {submitStatus === 'error' && <div style={{ color: 'red', marginBottom: '16px', fontSize: '14px' }}>There was an error submitting your application. Please try again.</div>}
                    <form className="ss-join-form" onSubmit={handleFormSubmit}>
                      <div className="ss-form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" required placeholder="Jane Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="ss-form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required placeholder="jane@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                      </div>
                      <div className="ss-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" required placeholder="+233..." value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                      </div>
                      <button type="submit" className="ss-submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}

      </div>
    </section>
  );
}
