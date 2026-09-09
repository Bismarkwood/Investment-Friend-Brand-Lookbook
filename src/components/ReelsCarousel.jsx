import React, { useEffect, useRef, useState } from 'react';
import './ReelsCarousel.css';
import cardCover1 from '../assets/coaching-card.jpg';
import cardCover2 from '../assets/about-hero-bg.jpg';
import cardCover3 from '../assets/our-story-card.jpg';
import cardCover4 from '../assets/exclusive-clubs-card.jpg';

// Helper function to turn regular IG post/reel link into embed link
function formatInstagramEmbedUrl(url) {
  if (!url) return '';
  let clean = url.split('?')[0].replace(/\/+$/, '');
  if (clean.includes('/reel/') || clean.includes('/p/')) {
    if (!clean.endsWith('/embed')) {
      return `${clean}/embed`;
    }
    return clean;
  }
  return url;
}

export default function ReelsCarousel({
  eyebrow = "INSTAGRAM REELS",
  heading = "Inside Investment Friend",
  description = "Watch our latest financial insights, market tips, and community updates shared directly on our Instagram.",
  reels = [
    {
      id: 'reel-1',
      title: 'Financial Education & Insights',
      url: 'https://www.instagram.com/reel/DdCWXK3idNa/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
      cover: cardCover1,
      views: '12.8k'
    },
    {
      id: 'reel-2',
      title: 'Smart Money & Wealth Building',
      url: 'https://www.instagram.com/reel/Da8hrTbCbi-/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
      cover: cardCover2,
      views: '15.4k'
    },
    {
      id: 'reel-3',
      title: 'Investment Tips & Community Highlights',
      url: 'https://www.instagram.com/reel/DcBNxLJKEda/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
      cover: cardCover3,
      views: '9.6k'
    },
    {
      id: 'reel-4',
      title: 'Financial Growth & Practical Wealth Guides',
      url: 'https://www.instagram.com/reel/DaPwFpTCeB6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
      cover: cardCover4,
      views: '11.4k'
    }
  ]
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [playingReelId, setPlayingReelId] = useState(null);

  const defaultCovers = [cardCover1, cardCover2, cardCover3, cardCover4];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`reels-carousel-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
      
      {/* Ambient Gold Background Orbs */}
      <div className="reels__glow reels__glow--1" />
      <div className="reels__glow reels__glow--2" />

      <div className="container reels__container">
        
        {/* Header with Eyebrow, Heading */}
        <div className="reels__header anim-fade-up">
          <div className="reels__header-text">
            {eyebrow && <span className="section-header__eyebrow reels__eyebrow">{eyebrow}</span>}
            {heading && <h2 className="reels__heading">{heading}</h2>}
            {description && <p className="reels__description">{description}</p>}
          </div>
        </div>

        {/* Reels Grid */}
        <div className="reels__track-wrap anim-fade-up delay-1">
          <div className="reels__track">
            {reels.map((reel, idx) => {
              const embedUrl = formatInstagramEmbedUrl(reel.url);
              const coverImg = reel.cover || defaultCovers[idx % defaultCovers.length];
              const reelId = reel.id || idx;
              const isPlaying = playingReelId === reelId;

              return (
                <div
                  key={reelId}
                  className="reels__card-wrapper"
                  onClick={() => !isPlaying && setPlayingReelId(reelId)}
                >
                  <div className={`reels__custom-card ${isPlaying ? 'is-playing' : ''}`}>
                    {isPlaying ? (
                      <iframe
                        src={`${embedUrl}?autoplay=1`}
                        title={reel.title || "Instagram Reel Video"}
                        className="reels__inline-iframe"
                        allowTransparency="true"
                        allow="encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        scrolling="no"
                      />
                    ) : (
                      <>
                        {/* Card Background Cover Image */}
                        <div
                          className="reels__card-bg"
                          style={{ backgroundImage: `url(${coverImg})` }}
                        />
                        <div className="reels__card-overlay" />

                        {/* Top Bar with Instagram Profile Badge */}
                        <div className="reels__card-header">
                          <div className="reels__card-user">
                            <div className="reels__card-avatar">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </div>
                            <div className="reels__card-meta">
                              <div className="reels__card-handle-row">
                                <span className="reels__card-handle">@investmentfriend</span>
                                <span className="reels__verified-badge" title="Verified Account">✓</span>
                              </div>
                              <span className="reels__card-tagline">Instagram Reel</span>
                            </div>
                          </div>

                          <a
                            href={reel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reels__external-btn"
                            onClick={(e) => e.stopPropagation()}
                            title="Open on Instagram"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </a>
                        </div>

                        {/* Center Play Button Overlay */}
                        <div className="reels__play-container">
                          <div className="reels__play-ring" />
                          <button className="reels__play-btn" aria-label="Play Reel Video">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="6 3 20 12 6 21 6 3"></polygon>
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Bottom Info Panel (Now below the card) */}
                  <div className="reels__card-bottom">
                    <span className="reels__card-category">Official Video</span>
                    <h3 className="reels__card-title">{reel.title}</h3>
                    
                    <div className="reels__card-footer-meta">
                      <span className="reels__card-action">
                        <span>{isPlaying ? 'Playing...' : 'Watch Reel'}</span>
                        {!isPlaying && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

