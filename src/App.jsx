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
import stationaryImg from './assets/Stationary/01 copy 6.jpg'
import statImg2 from './assets/Stationary/320001 Free Three Softcover Book Mockup From Top View.jpg'
import statImg3 from './assets/Stationary/Business Card Mockup.png'
import statImg4 from './assets/Stationary/Keychain_Mockup_5.jpg'
import statImg5 from './assets/Stationary/Leather_Keychain.jpg'
import statImg6 from './assets/Stationary/Leather_Keychain_Mockup.jpg'
import statImg7 from './assets/Stationary/Leather_Keychain_Mockup_2.jpg'
import statImg8 from './assets/Stationary/Pennant Flag - White.jpg'
import statImg9 from './assets/Stationary/Pennant Flag.jpg'
import statImg10 from './assets/Stationary/Standing Pen v1.jpg'
import statImg11 from './assets/Stationary/Standing Pen v2.png'
import digitalImg1 from './assets/Digital Presence/App Icon - Black.jpg'
import digitalImg2 from './assets/Digital Presence/App Icon - Gradient Gold.jpg'
import digitalImg3 from './assets/Digital Presence/Artboard 1 copy.jpg'
import digitalImg4 from './assets/Digital Presence/Artboard 3 copy 2.jpg'
import digitalImg5 from './assets/Digital Presence/Artboard 4.jpg'
import digitalImg6 from './assets/Digital Presence/Instagram 1.jpg'
import digitalImg7 from './assets/Digital Presence/Linkedin Profile.jpg'
import lifestyleImg1 from './assets/Lifestyle Collection/01 copy 8.jpg'
import lifestyleImg2 from './assets/Lifestyle Collection/01 Free Oversized Sweatshirt Mockup.png'
import lifestyleImg3 from './assets/Lifestyle Collection/Artboard 1.jpg'
import lifestyleImg4 from './assets/Lifestyle Collection/Artboard 1.png'
import lifestyleImg5 from './assets/Lifestyle Collection/Artboard 2.jpg'
import lifestyleImg6 from './assets/Lifestyle Collection/Baseball Cap.jpg'
import lifestyleImg7 from './assets/Lifestyle Collection/Black Hoodie Mockup Back Side.jpg'
import lifestyleImg8 from './assets/Lifestyle Collection/SENDLINESMS PRICING GUIDE.docx.jpg'
import lifestyleImg9 from "./assets/Lifestyle Collection/Women's_Sleeveless_Golf.png"
import lifestyleImg10 from "./assets/Lifestyle Collection/Women's_Sleeveless_Golf_Polo_Shirt_Mockup_01.jpg"
import lifestyleImg11 from './assets/Lifestyle Collection/Zip Hoodie.jpg'
import lifestyleImg12 from './assets/Lifestyle Collection/Zipper Hoodie.jpg'
import carImg1 from './assets/Car Album/Hatchback_Car_Mockup_1.jpg'
import carImg2 from './assets/Car Album/Car Branding.jpg'
import carImg3 from './assets/Car Album/Hatchback_Car_Mockup_2.jpg'
import carImg4 from './assets/Car Album/Hatchback_Car_Mockup_3.jpg'

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
    id: 5, num: '05', title: 'Stationery & Print',
    desc: 'Business cards, letterheads, folders and pens',
    count: 11, aspect: 'portrait', coverImg: stationaryImg,
    pages: [
      { type: 'opener', title: 'Stationery' },
      { type: 'hero', caption: 'Stationery Overview', img: stationaryImg },
      { type: 'spread', caption: 'Business Cards', img: statImg3 },
      { type: 'detail', caption: 'Softcover Book', img: statImg2 },
      { type: 'hero', caption: 'Standing Pen', img: statImg10 },
      { type: 'detail', caption: 'Standing Pen Alternate', img: statImg11 },
      { type: 'spread', caption: 'Leather Keychain', img: statImg5 },
      { type: 'hero', caption: 'Keychain Mockup 1', img: statImg6 },
      { type: 'detail', caption: 'Keychain Mockup 2', img: statImg7 },
      { type: 'spread', caption: 'Keychain Mockup 3', img: statImg4 },
      { type: 'detail', caption: 'Pennant Flag White', img: statImg8 },
      { type: 'hero', caption: 'Pennant Flag', img: statImg9 },
      { type: 'closer' },
    ]
  },
  {
    id: 6, num: '06', title: 'Lifestyle Collection',
    desc: 'Hoodies, cups, bottles and keychains',
    count: 12, aspect: 'square', coverImg: lifestyleImg1,
    pages: [
      { type: 'opener', title: 'Lifestyle Collection' },
      { type: 'hero', caption: 'Lifestyle Overview', img: lifestyleImg1 },
      { type: 'spread', caption: 'Oversized Sweatshirt', img: lifestyleImg2 },
      { type: 'detail', caption: 'Hoodie Back', img: lifestyleImg7 },
      { type: 'hero', caption: 'Zip Hoodie', img: lifestyleImg11 },
      { type: 'detail', caption: 'Zipper Hoodie Alt', img: lifestyleImg12 },
      { type: 'spread', caption: 'Golf Polo 1', img: lifestyleImg9 },
      { type: 'hero', caption: 'Golf Polo 2', img: lifestyleImg10 },
      { type: 'spread', caption: 'Baseball Cap', img: lifestyleImg6 },
      { type: 'hero', caption: 'Artboard 1', img: lifestyleImg3 },
      { type: 'detail', caption: 'Artboard 1 Alt', img: lifestyleImg4 },
      { type: 'spread', caption: 'Artboard 2', img: lifestyleImg5 },
      { type: 'detail', caption: 'Pricing Guide', img: lifestyleImg8 },
      { type: 'closer' },
    ]
  },
  {
    id: 7, num: '07', title: 'Car Branding',
    desc: 'Vehicle branding and outdoor applications',
    count: 4, aspect: 'landscape', coverImg: carImg1,
    pages: [
      { type: 'opener', title: 'Car Branding' },
      { type: 'hero', caption: 'Hatchback Front', img: carImg1 },
      { type: 'spread', caption: 'Hatchback Side', img: carImg3 },
      { type: 'detail', caption: 'Hatchback Rear', img: carImg4 },
      { type: 'hero', caption: 'Full Vehicle Wrap', img: carImg2 },
      { type: 'closer' },
    ]
  },
  {
    id: 8, num: '08', title: 'Digital Presence',
    desc: 'Social media, website and presentation templates',
    count: 7, aspect: 'landscape', coverImg: digitalImg1,
    pages: [
      { type: 'opener', title: 'Digital Presence' },
      { type: 'hero', caption: 'App Icon - Black', img: digitalImg1 },
      { type: 'detail', caption: 'App Icon - Gold', img: digitalImg2 },
      { type: 'spread', caption: 'Website & App UI 1', img: digitalImg3 },
      { type: 'hero', caption: 'Website & App UI 2', img: digitalImg4 },
      { type: 'detail', caption: 'Website & App UI 3', img: digitalImg5 },
      { type: 'spread', caption: 'Instagram Social Grid', img: digitalImg6 },
      { type: 'hero', caption: 'LinkedIn Profile Banner', img: digitalImg7 },
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
   CONTINUOUS LOOKBOOK SCROLL
   ============================== */
function ContinuousLookbook() {
  return (
    <div className="lookbook-scroll" id="albums">
      {ALBUMS.map((album, i) => {
        // Skip rendering if no valid pages with images exist in this album (e.g. only opener/closer)
        const hasImages = album.pages.some(p => p.img);
        if (!hasImages) return null;

        return (
          <section className="lookbook-section" id={`section-${album.id}`} key={album.id}>
            <div className="container">
              <div className="lookbook-section__header scroll-reveal">
                <span className="lookbook-section__num">{album.num}</span>
                <h2 className="lookbook-section__title">{album.title}</h2>
                <p className="lookbook-section__desc">{album.desc}</p>
              </div>
              <div className="lookbook-section__grid">
                {album.pages.map((page, j) => {
                  if (!page.img) return null;
                  const aspectClass = page.type === 'hero' || page.type === 'opener' ? 'span-full' : (page.type === 'spread' ? 'span-wide' : 'span-half');
                  return (
                    <div className={`lookbook-image-wrapper ${aspectClass} scroll-reveal`} key={j}>
                      <img src={page.img} alt={page.caption || album.title} className="lookbook-img" />
                      {page.caption && <p className="lookbook-caption">{page.caption}</p>}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  )
}



/* ==============================
   SIDE NAVIGATION
   ============================== */
function SideNav({ albums }) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    
    albums.forEach(album => {
      const el = document.getElementById(`section-${album.id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [albums])

  const scrollToSection = (id) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Filter albums that actually have images
  const validAlbums = albums.filter(a => a.pages.some(p => p.img))

  // Default to the first section if we are at the top (hero section) and nothing is intersecting yet
  const displayActiveId = activeId || (validAlbums.length > 0 ? `section-${validAlbums[0].id}` : null)

  return (
    <nav className="side-nav">
      {validAlbums.map((album) => (
        <button
          key={album.id}
          className={`side-nav__item ${displayActiveId === `section-${album.id}` ? 'side-nav__item--active' : ''}`}
          onClick={() => scrollToSection(album.id)}
          aria-label={`Scroll to ${album.title}`}
        >
          <span className="side-nav__label">{album.num} {album.title}</span>
        </button>
      ))}
    </nav>
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
        <div className="closing__accent-shape" />
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
            <ContinuousLookbook />
            <SideNav albums={ALBUMS} />
            <ClosingCover />
          </main>
        </div>
      )}
    </>
  )
}
