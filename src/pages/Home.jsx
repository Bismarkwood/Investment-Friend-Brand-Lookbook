import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import './Home.css'
import HeroV2 from '../components/HeroV2'
import Stories from '../components/Stories'
import ClientStories from '../components/ClientStories'
import ValueProposition from '../components/ValueProposition'
import StrategicServices from '../components/StrategicServices'
import CtaBanner from '../components/CtaBanner'
import RecentBlogs from '../components/RecentBlogs'

export default function Home() {
  useEffect(() => {
    // Add simple scroll reveal if needed later, but hero animates on mount
  }, [])

  return (
    <div className="home-page anim-site-enter">
      <SEO 
        title="Financial Education in Ghana | Investment Friend"
        description="Learn to budget, save and understand investing in Ghana. Explore practical classes, personalised financial coaching, free tools and learning communities."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Investment Friend",
          "url": "https://investmentfriend.com"
        }}
      />
      <main>
        <HeroV2 
          headlineText="Financial Education and Coaching"
          headlineAccent="in Ghana"
          subtext="Your money. Your future. Now you know. Explore practical classes, personalised financial coaching, free tools and learning communities."
        />
        <ValueProposition />
        <Stories />
        <StrategicServices />
        <ClientStories />
        <RecentBlogs />
        <CtaBanner />
      </main>
    </div>
  )
}
