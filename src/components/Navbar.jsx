import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/Logo Marks/Full Logo - Transparent.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isLegalPage = ['/cookies', '/privacy', '/terms'].includes(location.pathname)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])


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
          <button 
            className={`nav__menu-btn ${isMobileMenuOpen ? 'is-open' : ''}`} 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`nav__mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="nav__mobile-links">
          <Link to="/" className={`nav__mobile-link ${location.pathname === '/' ? 'nav__mobile-link--active' : ''}`}>Home</Link>
          <div className="nav__mobile-section">
            <span className="nav__mobile-section-title">Services</span>
            <Link to="/service/club" className="nav__mobile-sublink">Club</Link>
            <Link to="/service/classes" className="nav__mobile-sublink">Classes</Link>
            <Link to="/service/coaching" className="nav__mobile-sublink">Coaching</Link>
          </div>
          <div className="nav__mobile-section">
            <span className="nav__mobile-section-title">Resources</span>
            <Link to="/resources/tools" className="nav__mobile-sublink">Tools</Link>
            <Link to="/resources/blog" className="nav__mobile-sublink">Blog</Link>
          </div>
          <Link to="/about" className={`nav__mobile-link ${location.pathname.startsWith('/about') ? 'nav__mobile-link--active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav__mobile-link ${location.pathname.startsWith('/contact') ? 'nav__mobile-link--active' : ''}`}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
