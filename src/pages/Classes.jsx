import React from 'react';
import HeroSplit from '../components/HeroSplit';
import HowClassesWork from '../components/HowClassesWork';
import classesHeroImg from '../assets/Classes.webp';

export default function Classes() {
  return (
    <main className="page-classes anim-site-enter">
      <title>Classes — Investment Friend</title>
      <meta
        name="description"
        content="Master the fundamentals of investing with Investment Friend classes. Learn everything from budgeting to stock market analysis."
      />

      <HeroSplit 
        title={<>Learn what school never<br />taught you about money.</>}
        description="Practical financial education for life in Ghana. Beginner-friendly. Expert-led. Book and pay in one step."
        image={classesHeroImg}
        imageAlt="Classes Hero"
        primaryBtnText="See upcoming classes"
        primaryBtnLink="#classes"
        secondaryBtnText="Learn More"
        secondaryBtnLink="#about"
      />

      <HowClassesWork />
      
      {/* Future sections will go here */}
    </main>
  );
}
