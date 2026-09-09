import React, { useState } from 'react';
import SEO from '../components/SEO';
import HeroSplit from '../components/HeroSplit';
import ImpactSection from '../components/ImpactSection';
import GoalGallery from '../components/GoalGallery';
import GlassMetricsSection from '../components/GlassMetricsSection';
import CtaBanner from '../components/CtaBanner';
import CoachingBookingModal from '../components/CoachingBookingModal';
import WhoIsItFor from '../components/WhoIsItFor';
import coachingHeroImg from '../assets/coaching-card.jpg';

export default function Coaching() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="page-coaching anim-site-enter">
      <SEO 
        title="Financial Coaching in Ghana | Investment Friend"
        description="Book personalised financial coaching in Ghana. Work through your budget, savings, debt and financial goals with an experienced Investment Friend coach."
      />

      <HeroSplit 
        title={<>Personalised Financial Coaching<br />in Ghana</>}
        description="One-on-one coaching with experienced financial professionals who understand your situation, your goals, and the Ghanaian financial landscape."
        image={coachingHeroImg}
        imageAlt="Financial Coaching Session"
        primaryBtnText="Book a session"
        primaryBtnLink="#book"
        primaryBtnOnClick={() => setIsBookingModalOpen(true)}
        secondaryBtnText="Learn More"
        secondaryBtnLink="#how-it-works"
      />

      <ImpactSection 
        eyebrow="OUR APPROACH"
        quote={
          <>
            <p>
              We start by understanding where you are: your income, your expenses, your debts, your goals, and your concerns. Then we build a plan together. Not a generic template. A plan that reflects your actual life.
            </p>
            <p>
              Our coaches have direct experience in investment management, financial planning, and institutional finance. They know what products are available in Ghana, which institutions are trustworthy, and how to navigate the financial landscape here.
            </p>
          </>
        }
        stats={[]}
      />

      <GoalGallery 
        eyebrow="WHAT A COACHING SESSION LOOKS LIKE"
        heading="Every session is a practical, one-on-one conversation designed to understand your finances, clarify your goals, and create a plan that works for your real life."
      />

      <GlassMetricsSection />

      <WhoIsItFor />

      <CtaBanner 
        title={<>Your finances deserve<br />personal attention.</>}
        description="Book your 1-on-1 session today and start building a personalized financial roadmap designed for your real life."
        primaryAction={{ 
          text: "Book a coaching session", 
          href: "#book", 
          icon: "arrow-up-right",
          onClick: () => setIsBookingModalOpen(true)
        }}
        secondaryAction={{ text: "Explore classes", href: "/service/classes", icon: "arrow-right" }}
      />

      <CoachingBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </main>
  );
}
