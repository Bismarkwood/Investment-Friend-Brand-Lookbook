import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPostHero.css';

/* Pull the opening paragraph out of the stored HTML for the standfirst */
function getExcerpt(html = '', maxLength = 190) {
  const match = html.match(/<p>([\s\S]*?)<\/p>/i);
  const text = (match ? match[1] : html).replace(/<[^>]+>/g, '').trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, text.lastIndexOf(' ', maxLength))}…`;
}

/* Hero needs a larger render than the card thumbnails do */
function upscale(src = '') {
  return src.includes('images.unsplash.com')
    ? src.replace(/([?&])w=\d+/, '$1w=2000')
    : src;
}

export default function BlogPostHero({ post, readTime }) {
  const mediaRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const excerpt = useMemo(() => getExcerpt(post.content), [post.content]);
  const heroImage = useMemo(() => upscale(post.image), [post.image]);

  /* Reading progress + gentle parallax, batched into one rAF pass */
  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);

      if (mediaRef.current) {
        const shift = Math.min(window.scrollY * 0.18, 120);
        mediaRef.current.style.transform = `translate3d(0, ${shift}px, 0) scale(1.06)`;
      }
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Reading progress rail */}
      <div className="post-progress" aria-hidden="true">
        <span className="post-progress__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="post-hero">
        <div className="post-hero__frame">
          <div className="post-hero__media" ref={mediaRef}>
            <img src={heroImage} alt={post.title} />
          </div>
          <div className="post-hero__scrim" />
          <div className="post-hero__grain" aria-hidden="true" />

          <div className="post-hero__inner">
            <nav className="post-hero__crumbs anim-rise" style={{ animationDelay: '0.15s' }} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/resources/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="post-hero__crumbs-current">{post.category}</span>
            </nav>

            <div className="post-hero__tags anim-rise" style={{ animationDelay: '0.25s' }}>
              <span className="post-hero__pill">{post.category}</span>
              {readTime && (
                <span className="post-hero__readtime">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  {readTime}
                </span>
              )}
            </div>

            <h1 className="post-hero__title anim-rise" style={{ animationDelay: '0.35s' }}>
              {post.title}
            </h1>

            {excerpt && (
              <p className="post-hero__excerpt anim-rise" style={{ animationDelay: '0.45s' }}>
                {excerpt}
              </p>
            )}

            <div className="post-hero__byline anim-rise" style={{ animationDelay: '0.55s' }}>
              <img className="post-hero__avatar" src={post.authorAvatar} alt="" />
              <span className="post-hero__byline-text">
                <span className="post-hero__author">{post.author}</span>
                <span className="post-hero__meta">
                  Published
                  <em className="post-hero__dot" aria-hidden="true">•</em>
                  {post.date}
                </span>
              </span>
            </div>
          </div>

          <div className="post-hero__cue" aria-hidden="true">
            <span className="post-hero__cue-line" />
            <span className="post-hero__cue-label">Scroll to read</span>
          </div>
        </div>
      </header>
    </>
  );
}
