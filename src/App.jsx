import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import logoImg from './assets/Logo/Logo Transparent Gradient Gold.png'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Brand from './pages/Brand'
import About from './pages/About'
import Club from './pages/Club'
import Classes from './pages/Classes'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import CookiePolicy from './pages/CookiePolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Footer from './components/Footer'
import AdminLayout from './admin/components/AdminLayout'
import AdminClubManagement from './admin/pages/AdminClubManagement'
/* ==============================
   LOGO INTRO
   ============================== */
function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState('enter')
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 1200)
    const t2 = setTimeout(() => setPhase('exit'), 3400)
    const t3 = setTimeout(() => onComplete(), 4400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <div className={`intro intro--${phase}`}>
      {/* Decorative floating elements */}
      <div className="intro__orb intro__orb--1" />
      <div className="intro__orb intro__orb--2" />
      <div className="intro__orb intro__orb--3" />
      <div className="intro__shimmer" />

      {/* Top decorative line */}
      <div className="intro__top-accent">
        <span className="intro__diamond">◇</span>
      </div>

      <div className="intro__inner">
        {/* Framing lines */}
        <div className="intro__frame-line intro__frame-line--top" />

        <img src={logoImg} alt="Investment Friend" className="intro__logo" />

        <div className="intro__tagline">
          <span className="intro__line" />
          <span className="intro__tagline-text">Your goals. Your growth.</span>
          <span className="intro__line" />
        </div>

        <div className="intro__frame-line intro__frame-line--bottom" />
      </div>

      {/* Bottom decorative flourish */}
      <div className="intro__flourish">
        <span className="intro__flourish-line" />
        <span className="intro__flourish-circle" />
        <span className="intro__flourish-line" />
      </div>
    </div>
  )
}

/* ==============================
   APP
   ============================== */
export default function App() {
  const [ready, setReady] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  const handleIntroDone = useCallback(() => {
    setIntroDone(true)
    setTimeout(() => setReady(true), 100)
  }, [])

  return (
    <>
      {!introDone && <LogoIntro onComplete={handleIntroDone} />}
      {ready && (
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<><Navbar /><Outlet /><Footer /></>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="brand" element={<Brand />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service/club" element={<Club />} />
            <Route path="club" element={<Club />} />
            <Route path="service/classes" element={<Classes />} />
            <Route path="classes" element={<Classes />} />
            <Route path="resources/blog" element={<Blog />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="cookies" element={<CookiePolicy />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
          </Route>

          {/* Admin Portal Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="club-management" element={<AdminClubManagement />} />
          </Route>
        </Routes>
      )}
    </>
  )
}
