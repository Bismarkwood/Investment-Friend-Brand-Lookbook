import React from 'react';
import SEO from '../components/SEO';
import HeroSplit from '../components/HeroSplit';
import HowClassesWork from '../components/HowClassesWork';
import OurAudience from '../components/StrategicServices';
import classesHeroImg from '../assets/Classes.webp';
import CtaBanner from '../components/CtaBanner';

export default function Classes() {
  return (
    <main className="page-classes anim-site-enter">
      <SEO 
        title="Financial Literacy Classes in Ghana | Investment Friend"
        description="Explore financial literacy classes in Ghana on budgeting, saving and investing. View upcoming sessions, meet your instructors and book your place online."
      />

      <HeroSplit 
        title={<>Financial Literacy Classes<br />in Ghana</>}
        description="Three exclusive communities for people who want more than classes. Real insights. Real strategies. Real access."
        image={classesHeroImg}
        imageAlt="Classes Hero"
        primaryBtnText="See upcoming classes"
        primaryBtnLink="#classes"
        secondaryBtnText="Learn More"
        secondaryBtnLink="#about"
      />

      <HowClassesWork />

      <OurAudience 
        eyebrow="OUR CLASS" 
        title="What You Will Learn" 
        variant="classes"
      />
      
      <CtaBanner />
      {/* Future sections will go here */}
    </main>
  );
}
