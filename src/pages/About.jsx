import React from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../seo.config';
import '../components/HeroSplit.css';
import './About.css';
import OurStory from '../components/OurStory';
import OurProcess from '../components/OurProcess';
import OurApproach from '../components/OurApproach';
import ReelsCarousel from '../components/ReelsCarousel';
import OurTeam from '../components/OurTeam';
import CtaBanner from '../components/CtaBanner';
import aboutHeroImg from '../assets/about-hero-new.jpg';

export default function About() {
  return (
    <main className="page-about anim-site-enter">
      <SEO 
        title="About Investment Friend | Financial Education in Ghana"
        description="Meet the people behind Investment Friend. Discover our story, financial education approach and commitment to helping people in Ghana manage money better."
        path="/about"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ])}
      />
      <section className="hero-split">
        <div className="container">
          <div className="hero-split__top anim-fade-up">
            <h1 className="hero-split__headline">
              About <span style={{ color: 'var(--gold-primary)' }}>Investment Friend</span>
            </h1>
            <div className="hero-split__desc-wrap">
              <p className="hero-split__desc">
                We believe financial education should be accessible, practical, and personal. Learn more about our mission and the experts guiding your financial journey.
              </p>
              <div className="hero-split__actions">
                <a href="#story" className="hero-btn hero-btn--primary">
                  <span>Our Story</span>
                  <span className="hero-btn__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </span>
                </a>
                <a href="#team" className="hero-btn hero-btn--secondary">
                  <span>Meet the Team</span>
                  <span className="hero-btn__icon-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-split__image-wrap anim-fade-up" style={{ animationDelay: '0.3s' }}>
          <img src={aboutHeroImg} alt="About Us" className="hero-split__image" />
        </div>
      </section>

      <OurStory />
      <OurProcess />
      <OurApproach />
      <ReelsCarousel
        reels={[
          {
            id: 'reel-1',
            title: 'Financial Education & Insights',
            url: 'https://www.instagram.com/reel/DdCWXK3idNa/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=='
          },
          {
            id: 'reel-2',
            title: 'Smart Money & Wealth Building',
            url: 'https://www.instagram.com/reel/Da8hrTbCbi-/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=='
          },
          {
            id: 'reel-3',
            title: 'Investment Tips & Community Highlights',
            url: 'https://www.instagram.com/reel/DcBNxLJKEda/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=='
          },
          {
            id: 'reel-4',
            title: 'Financial Growth & Practical Wealth Guides',
            url: 'https://www.instagram.com/reel/DaPwFpTCeB6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=='
          }
        ]}
      />
      <OurTeam />
      <CtaBanner />

      {/* We can add more sections to the About page here later */}
    </main>
  );
}
