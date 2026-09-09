import React from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema, serviceSchema } from '../seo.config';
import clubHeroImg from '../assets/club-hero-bg.png';
import exclusiveClubsImg from '../assets/exclusive-clubs-card.jpg';
import './Club.css';
import HeroSplit from '../components/HeroSplit';
import StrategicServices from '../components/StrategicServices';
import CtaBanner from '../components/CtaBanner';
import ClientStories from '../components/ClientStories';

export default function Club() {
  return (
    <main className="page-club anim-site-enter">
      <SEO 
        title="Investment Learning Clubs in Ghana | Investment Friend"
        description="Explore Money Movers Club, Stock Club and Real Estate Circle. Compare Investment Friend communities, member benefits and ways to keep learning in Ghana."
        path="/service/club"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/service/club' },
            { name: 'Clubs', path: '/service/club' }
          ]),
          serviceSchema({
            name: 'Investment Learning Clubs',
            description:
              'Members-only learning communities in Ghana: Money Movers Club, Stock Club and Real Estate Circle.',
            path: '/service/club',
            serviceType: 'Investment learning community'
          })
        ]}
      />

      <HeroSplit 
        title={<>Investment Learning Communities<br />in Ghana</>}
        description="Three exclusive communities for people who want more than classes. Real insights. Real strategies. Real access."
        image={clubHeroImg}
        imageAlt="Club Hero"
        primaryBtnText="Become a Member"
        primaryBtnLink="#join"
        secondaryBtnText="Explore Benefits"
        secondaryBtnLink="#benefits"
      />

      <section className="our-clubs-section">
        <div className="our-clubs__inner">
          <div className="our-clubs__content">
            <span className="our-clubs__label">WHY CLUBS</span>
            <div className="our-clubs__description">
              <p>Classes teach you the fundamentals. Coaching gives you a personal plan. Clubs give you a community of people who are actively building wealth alongside you.</p>
              <p>Each club is a members-only space where you get exclusive content, direct access to professionals active in that market, and a network of people who share your ambition. This is not a Facebook group. This is a curated community with real value behind the membership.</p>
            </div>
          </div>
          <div className="our-clubs__image-wrapper">
            <img src={exclusiveClubsImg} alt="Our Clubs" className="our-clubs__image" />
          </div>
        </div>
      </section>

      <StrategicServices 
        variant="clubs"
        eyebrow="Our Clubs"
        title="Find Your Community"
        description="Discover a tailored community of investors at the same stage of wealth building. Our clubs offer exclusive insights, networking, and strategies designed for your specific goals."
      />

      <ClientStories 
        eyebrow="MEMBER STORIES"
        title="Real outcomes from our community."
        description="Join hundreds of individuals who are actively building their portfolios and shifting their money mindset through our dedicated clubs."
        stories={[
          {
            id: 1,
            quote: "The Money Movers Club completely shifted my money mindset. I finally have a clear budget and savings goal.",
            name: "Kwame O.",
            company: "Money Movers Club",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
          },
          {
            id: 2,
            quote: "Stock Club broke down market trends in a way I could actually understand. I made my first investment with confidence.",
            name: "Abena M.",
            company: "Stock Club",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
          },
          {
            id: 3,
            quote: "Through the Real Estate Circle, I found the network and legal guidance to secure my first property.",
            name: "David T.",
            company: "Real Estate Circle",
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
          }
        ]}
      />
      
      <CtaBanner 
        title={<>Ready to grow<br/>your wealth?</>}
        description="Join our exclusive community of investors and start building a portfolio that works for your future."
        primaryAction={{ text: "Join us now", href: "#join", icon: "arrow-up-right" }}
        secondaryAction={null}
      />
    </main>
  );
}
