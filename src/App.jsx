import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'
import logoImg from './assets/Logo/Logo Transparent Gradient Gold.png'
import coverImg from './assets/Cover Page/Social Intro.jpg'
import brandFoundationImg from './assets/Brand Foundation/Brand foundation.jpg'
import bfImg1 from './assets/Brand Foundation/1.png'
import bfImg2 from './assets/Brand Foundation/Screenshot 2026-09-02 113445.png'
import bfImg3 from './assets/Brand Foundation/Screenshot 2026-09-02 113614.png'
import bfImg4 from './assets/Brand Foundation/Screenshot 2026-09-02 113638.png'
import logoMark1 from './assets/Logo Marks/Full Logo - Full Black.jpg'
import logoMark2 from './assets/Logo Marks/Full Logo - Logo icon.jpg'
import logoMark3 from './assets/Logo Marks/Full Logo - Transparent.png'
import logoMark4 from './assets/Logo Marks/Full Logo - White.jpg'
import colourTypeImg from './assets/Colour Type/Colour Type.jpg'
import ctImg1 from './assets/Colour Type/Screenshot 2026-09-02 114927.png'
import ctImg2 from './assets/Colour Type/Screenshot 2026-09-02 115022.png'
import ctImg3 from './assets/Colour Type/Screenshot 2026-09-02 115049.png'
import patternImg from './assets/Patterns & Graphics/01 copy 4.jpg'

/* ==============================
   ALBUM DATA
   ============================== */
const ALBUMS = [
  {
    id: 1, num: '01', title: 'Brand Foundations',
    desc: 'Purpose, positioning, personality and values',
    count: 4, aspect: 'portrait', coverImg: brandFoundationImg,
    pages: [
      { type: 'opener', title: 'Brand Foundations' },
      { type: 'hero', caption: 'Our Purpose', img: bfImg1 },
      { type: 'detail', caption: 'Brand Positioning', img: bfImg2 },
      { type: 'hero', caption: 'Personality & Tone', img: bfImg3 },
      { type: 'hero', caption: 'Core Values', img: bfImg4 },
      { type: 'closer' },
    ]
  },
  {
    id: 2, num: '02', title: 'Logo & Marks',
    desc: 'Primary logo, symbol, variations and construction',
    count: 4, aspect: 'landscape', coverImg: logoMark4,
    pages: [
      { type: 'opener', title: 'Logo & Marks' },
      { type: 'hero', caption: 'Full Logo - White', img: logoMark4 },
      { type: 'detail', caption: 'Full Logo - Black', img: logoMark1 },
      { type: 'hero', caption: 'Logo Icon', img: logoMark2 },
      { type: 'detail', caption: 'Transparent Logo', img: logoMark3 },
      { type: 'closer' },
    ]
  },
  {
    id: 3, num: '03', title: 'Colour & Type',
    desc: 'Brand colours, typography and hierarchy',
    count: 4, aspect: 'square', coverImg: colourTypeImg,
    pages: [
      { type: 'opener', title: 'Colour & Type' },
      { type: 'hero', caption: 'Colour & Typography', img: colourTypeImg },
      { type: 'detail', caption: 'Primary Palette', img: ctImg1 },
      { type: 'hero', caption: 'Typography System', img: ctImg2 },
      { type: 'spread', caption: 'Colour Applications', img: ctImg3 },
      { type: 'closer' },
    ]
  },
  {
    id: 4, num: '04', title: 'Patterns & Graphics',
    desc: 'The shapes, repetitions and visual rhythms that make Investment Friend recognisable',
    count: 1, aspect: 'landscape', coverImg: patternImg,
    pages: [
      { type: 'opener', title: 'Patterns & Graphics' },
      { type: 'hero', caption: 'Logo Pattern', img: patternImg },
      { type: 'closer' },
    ]
  },
  {
    id: 5, num: '05', title: 'Stationery',
    desc: 'Business cards, letterheads, folders and pens',
    count: 8, aspect: 'portrait',
    pages: [
      { type: 'opener', title: 'Stationery' },
      { type: 'hero', caption: 'Business Card — Front' },
      { type: 'detail', caption: 'Business Card — Back' },
      { type: 'spread', caption: 'Letterhead Design' },
      { type: 'detail', caption: 'Envelope System' },
      { type: 'hero', caption: 'Presentation Folder' },
      { type: 'spread', caption: 'Branded Pen Set' },
      { type: 'closer' },
    ]
  },
  {
    id: 6, num: '06', title: 'Lifestyle Collection',
    desc: 'Hoodies, cups, bottles and keychains',
    count: 10, aspect: 'square',
    pages: [
      { type: 'opener', title: 'Lifestyle Collection' },
      { type: 'hero', caption: 'Branded Hoodie' },
      { type: 'detail', caption: 'Coffee Cup' },
      { type: 'spread', caption: 'Water Bottle' },
      { type: 'detail', caption: 'Tote Bag' },
      { type: 'hero', caption: 'Keychain Set' },
      { type: 'spread', caption: 'Notebook & Pen' },
      { type: 'detail', caption: 'Cap & Beanie' },
      { type: 'hero', caption: 'Full Merch Collection' },
      { type: 'closer' },
    ]
  },
  {
    id: 7, num: '07', title: 'On the Move',
    desc: 'Vehicle branding and outdoor applications',
    count: 7, aspect: 'landscape',
    pages: [
      { type: 'opener', title: 'On the Move' },
      { type: 'hero', caption: 'Vehicle Wrap — Side' },
      { type: 'detail', caption: 'Vehicle Wrap — Rear' },
      { type: 'spread', caption: 'Fleet Overview' },
      { type: 'hero', caption: 'Outdoor Signage' },
      { type: 'detail', caption: 'Window Graphics' },
      { type: 'closer' },
    ]
  },
  {
    id: 8, num: '08', title: 'Digital Presence',
    desc: 'Social media, website and presentation templates',
    count: 9, aspect: 'landscape',
    pages: [
      { type: 'opener', title: 'Digital Presence' },
      { type: 'hero', caption: 'Website Homepage' },
      { type: 'detail', caption: 'Mobile App' },
      { type: 'spread', caption: 'Social Media Kit' },
      { type: 'detail', caption: 'Instagram Grid' },
      { type: 'hero', caption: 'LinkedIn Banner' },
      { type: 'spread', caption: 'Presentation Template' },
      { type: 'detail', caption: 'Email Signature' },
      { type: 'closer' },
    ]
  },
]

/* ==============================
   LOGO INTRO
   ============================== */
function LogoIntro({ onComplete }) {
  const [phase, setPhase] = useState('enter')
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 800)
    const t2 = setTimeout(() => setPhase('exit'), 2200)
    const t3 = setTimeout(() => onComplete(), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <div className={`intro intro--${phase}`}>
      <div className="intro__inner">
        <img src={logoImg} alt="Investment Friend" className="intro__logo" />
        <div className="intro__tagline">
          <span className="intro__line" />
          <span>Brand Lookbook 2026</span>
          <span className="intro__line" />
        </div>
      </div>
    </div>
  )
}

/* ==============================
   NAVBAR
   ============================== */
function Navbar({ onSection }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <div className="nav__left">
          <a href="#" className="nav__logo-link">
            <img src={logoImg} alt="Investment Friend" className="nav__logo" />
          </a>
          <span className="nav__label">Brand Lookbook 2026</span>
        </div>
        <div className="nav__right">
          <a href="#about" className="nav__link">About the Brand</a>
          <a href="#albums" className="nav__link">Albums</a>
          <a href="#closing" className="nav__link">Contact</a>
          <button className="nav__menu-btn" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}

/* ==============================
   HERO COVER
   ============================== */
function HeroCover() {
  return (
    <section className="cover">
      <div className="cover__bg">
        <div className="cover__pattern" />
        <div className="cover__overlay" />
        <div className="cover__accent-shape" />
      </div>

      <div className="cover__content">
        <div className="cover__top anim-fade-in" style={{ animationDelay: '0.3s' }}>
          <span>INVESTMENT FRIEND</span>
          <span className="cover__top-divider">·</span>
          <span>BRAND IDENTITY / 2026</span>
        </div>

        <h1 className="cover__title">
          <span className="cover__title-line anim-fade-in" style={{ animationDelay: '0.5s' }}>INVESTMENT</span>
          <span className="cover__title-line cover__title-line--gold anim-fade-in" style={{ animationDelay: '0.7s' }}>FRIEND</span>
        </h1>

        <p className="cover__sub anim-fade-in" style={{ animationDelay: '0.9s' }}>
          A visual identity for making financial growth<br />feel more approachable.
        </p>

        <div className="cover__bottom">
          <span className="cover__edition anim-fade-in" style={{ animationDelay: '1.1s' }}>Lookbook Edition 01</span>
          <a href="#about" className="cover__scroll anim-fade-in" style={{ animationDelay: '1.1s' }}>
            Scroll to explore <span className="cover__scroll-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ==============================
   BRAND INTRODUCTION
   ============================== */
function BrandIntro() {
  return (
    <section className="brand" id="about">
      <div className="container">
        <div className="brand__grid">
          <div className="brand__text scroll-reveal">
            <h2 className="brand__statement">
              Investment should feel less distant and more <span className="gold-text">human.</span>
            </h2>
            <p className="brand__body">
              Investment Friend is designed as a knowledgeable companion—helping
              people approach financial opportunities with greater clarity,
              confidence and understanding.
            </p>
          </div>
          <div className="brand__visual scroll-reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="brand__image-frame">
              <img src={coverImg} alt="Investment Friend Branding" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>

        <div className="brand__traits scroll-reveal" style={{ transitionDelay: '0.25s' }}>
          {['Clear', 'Supportive', 'Forward-looking'].map((t, i) => (
            <div className="trait" key={i}>
              <span className="trait__dot" />
              <span className="trait__text">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==============================
   ALBUM COLLECTION
   ============================== */
function AlbumCollection({ onOpenAlbum }) {
  return (
    <section className="albums" id="albums">
      <div className="container">
        <div className="albums__header scroll-reveal">
          <h2 className="albums__heading">Explore the Identity</h2>
          <p className="albums__sub">Browse the visual system through a collection of brand albums.</p>
        </div>

        <div className="albums__grid">
          {ALBUMS.map((album, i) => (
            <div
              className={`album-card album-card--${album.aspect} ${i === 0 ? 'album-card--featured' : ''} scroll-reveal`}
              key={album.id}
              style={{ transitionDelay: `${Math.min(i * 0.08, 0.5)}s` }}
              onClick={() => onOpenAlbum(album)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenAlbum(album)}
            >
              <div className="album-card__image">
                {album.coverImg ? (
                  <img src={album.coverImg} alt={album.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="album-card__placeholder">
                    <span className="album-card__big-num">{album.num}</span>
                  </div>
                )}
                <div className="album-card__hover-overlay">
                  <span className="album-card__view-label">Open Album →</span>
                </div>
              </div>
              <div className="album-card__info">
                <span className="album-card__num">{album.num}</span>
                <h3 className="album-card__title">{album.title}</h3>
                <p className="album-card__desc">{album.desc}</p>
                <span className="album-card__count">{album.count} visuals</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==============================
   ALBUM VIEWER (Full-screen)
   ============================== */
function AlbumViewer({ album, onClose }) {
  const [current, setCurrent] = useState(0)
  const viewerRef = useRef(null)
  const total = album.pages.length
  const page = album.pages[current]

  const goNext = useCallback(() => setCurrent(c => Math.min(c + 1, total - 1)), [total])
  const goPrev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext()
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev()
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [goNext, goPrev, onClose])

  // Touch swipe
  const touchStart = useRef(null)
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (!touchStart.current) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 60) { diff > 0 ? goNext() : goPrev() }
    touchStart.current = null
  }

  const renderPage = () => {
    if (page.type === 'opener') {
      return (
        <div className="viewer__page viewer__page--opener" style={album.coverImg ? { backgroundImage: `linear-gradient(to right, rgba(12, 18, 32, 0.95) 30%, rgba(12, 18, 32, 0.4)), url(${album.coverImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
          <span className="viewer__page-big-num">{album.num}</span>
          <div className="viewer__opener-text">
            <span className="viewer__opener-label">Album {album.num}</span>
            <h2 className="viewer__opener-title">{page.title}</h2>
            <p className="viewer__opener-desc">{album.desc}</p>
          </div>
        </div>
      )
    }
    if (page.type === 'closer') {
      return (
        <div className="viewer__page viewer__page--closer">
          <div className="viewer__closer-content">
            <img src={logoImg} alt="" className="viewer__closer-logo" />
            <p className="viewer__closer-text">End of {album.title}</p>
            <div className="viewer__closer-actions">
              <button className="viewer__btn" onClick={onClose}>Return to Albums</button>
              {current < total - 1 && (
                <button className="viewer__btn viewer__btn--ghost" onClick={goNext}>
                  View Next Collection →
                </button>
              )}
            </div>
          </div>
        </div>
      )
    }
    // hero, detail, spread
    return (
      <div className={`viewer__page viewer__page--${page.type}`}>
        <div className="viewer__image-area">
          {page.img ? (
             <img src={page.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div className="viewer__img-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <span>Upload Image</span>
            </div>
          )}
        </div>
        {page.type === 'spread' && (
          <div className="viewer__side-area">
            <div className="viewer__img-placeholder viewer__img-placeholder--small">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <p className="viewer__side-caption">{page.caption}</p>
          </div>
        )}
        {page.type !== 'spread' && (
          <div className="viewer__caption-bar">
            <span>{page.caption}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="viewer" ref={viewerRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Header */}
      <div className="viewer__header">
        <div className="viewer__header-left">
          <span className="viewer__header-num">{album.num}</span>
          <span className="viewer__header-sep">/</span>
          <span>{album.title}</span>
        </div>
        <div className="viewer__header-center">
          <img src={logoImg} alt="" className="viewer__header-logo" />
        </div>
        <div className="viewer__header-right">
          <button className="viewer__icon-btn" onClick={onClose} aria-label="Close">✕</button>
        </div>
      </div>

      {/* Main */}
      <div className="viewer__main" key={current}>
        {renderPage()}
      </div>

      {/* Navigation */}
      {current > 0 && (
        <button className="viewer__arrow viewer__arrow--prev" onClick={goPrev} aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
      )}
      {current < total - 1 && (
        <button className="viewer__arrow viewer__arrow--next" onClick={goNext} aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
      )}

      {/* Footer */}
      <div className="viewer__footer">
        <div className="viewer__progress">
          <span className="viewer__page-count">{String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          <div className="viewer__progress-bar">
            <div className="viewer__progress-fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
          </div>
        </div>
        <div className="viewer__filmstrip">
          {album.pages.map((_, i) => (
            <button
              className={`viewer__thumb ${i === current ? 'viewer__thumb--active' : ''}`}
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ==============================
   CLOSING COVER
   ============================== */
function ClosingCover() {
  return (
    <section className="closing" id="closing">
      <div className="closing__bg">
        <div className="closing__pattern" />
        <div className="closing__overlay" />
      </div>
      <div className="closing__content scroll-reveal">
        <h2 className="closing__title">
          Your goals. Your growth.<br />
          <span className="gold-text">Your Investment Friend.</span>
        </h2>
        <p className="closing__sub">
          A financial identity designed to feel knowledgeable,<br />
          approachable and ready for the future.
        </p>
        <img src={logoImg} alt="Investment Friend" className="closing__logo" />
        <div className="closing__meta">
          <span>Brand Lookbook 2026</span>
          <span className="closing__meta-sep">·</span>
          <span>End of Edition 01</span>
        </div>
      </div>
    </section>
  )
}

/* ==============================
   APP
   ============================== */
export default function App() {
  const [ready, setReady] = useState(false)
  const [introDone, setIntroDone] = useState(false)
  const [activeAlbum, setActiveAlbum] = useState(null)

  const handleIntroDone = useCallback(() => {
    setIntroDone(true)
    setTimeout(() => setReady(true), 100)
  }, [])

  // Scroll-triggered animations
  useEffect(() => {
    if (!ready) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => obs.observe(el))
    }, 150)
    return () => obs.disconnect()
  }, [ready])

  return (
    <>
      {!introDone && <LogoIntro onComplete={handleIntroDone} />}
      {ready && (
        <div className="site anim-site-enter">
          <Navbar />
          <main>
            <HeroCover />
            <BrandIntro />
            <AlbumCollection onOpenAlbum={setActiveAlbum} />
            <ClosingCover />
          </main>
        </div>
      )}
      {activeAlbum && (
        <AlbumViewer album={activeAlbum} onClose={() => setActiveAlbum(null)} />
      )}
    </>
  )
}
