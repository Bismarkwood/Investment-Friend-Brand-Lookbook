import React, { useEffect } from 'react'
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
      <main>
        <HeroV2 />
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
