import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/Logo/Logo Transparent Gradient Gold.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isLegalPage = ['/cookies', '/privacy', '/terms'].includes(location.pathname)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''} ${location.pathname === '/' ? 'nav--light-text' : ''} ${isLegalPage ? 'nav--legal' : ''}`}>
      <div className="nav__inner">
        <div className="nav__left">
          <Link to="/" className="nav__logo-link">
            <img src={logoImg} alt="Investment Friend" className="nav__logo" />
          </Link>
        </div>
        <div className="nav__right">
          <Link to="/" className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}>Home</Link>
          <div className="nav__dropdown-container">
            <Link to="/service" className={`nav__link nav__link--dropdown ${location.pathname.startsWith('/service') ? 'nav__link--active' : ''}`}>
              Services
              <svg className="nav__dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="nav__dropdown-menu">
              <Link to="/service/club" className="nav__dropdown-item">Club</Link>
              <Link to="/service/classes" className="nav__dropdown-item">Classes</Link>
              <Link to="/service/coaching" className="nav__dropdown-item">Coaching</Link>
            </div>
          </div>
          <div className="nav__dropdown-container">
            <Link to="/resources" className={`nav__link nav__link--dropdown ${location.pathname.startsWith('/resources') ? 'nav__link--active' : ''}`}>
              Resources
              <svg className="nav__dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="nav__dropdown-menu">
              <Link to="/resources/tools" className="nav__dropdown-item">Tools</Link>
              <Link to="/resources/blog" className="nav__dropdown-item">Blog</Link>
            </div>
          </div>
          <Link to="/about" className={`nav__link ${location.pathname.startsWith('/about') ? 'nav__link--active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav__link ${location.pathname.startsWith('/contact') ? 'nav__link--active' : ''}`}>Contact</Link>
          <button className="nav__menu-btn" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
