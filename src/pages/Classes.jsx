import React from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema, courseSchema } from '../seo.config';
import HeroSplit from '../components/HeroSplit';
import './Classes.css';
import HowClassesWork from '../components/HowClassesWork';
import UpcomingClasses from '../components/UpcomingClasses';
import OurAudience from '../components/StrategicServices';
import classesHeroImg from '../assets/Classes.webp';
import CtaBanner from '../components/CtaBanner';

export default function Classes() {
  return (
    <main className="page-classes anim-site-enter">
      <SEO 
        title="Financial Literacy Classes in Ghana | Investment Friend"
        description="Explore financial literacy classes in Ghana on budgeting, saving and investing. View upcoming sessions, meet your instructors and book your place online."
        path="/service/classes"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/service/classes' },
            { name: 'Classes', path: '/service/classes' }
          ]),
          courseSchema({
            name: 'Financial Literacy Classes',
            description:
              'Beginner-friendly classes in Ghana covering budgeting, saving and investing, taught with local examples and practical steps.',
            path: '/service/classes'
          })
        ]}
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

      <UpcomingClasses />
      
      <CtaBanner />
      {/* Future sections will go here */}
    </main>
  );
}
