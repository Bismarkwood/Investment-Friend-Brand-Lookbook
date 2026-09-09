import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogHero.css';

const FEATURED_POSTS = [
  {
    id: 1,
    category: "Financial Literacy",
    title: "How to Build Generational Wealth in Ghana",
    excerpt: "Discover the key strategies and mindset shifts needed to secure your family's financial future for generations to come.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
    link: "/blog/generational-wealth"
  },
  {
    id: 2,
    category: "Investment Strategies",
    title: "Navigating the Stock Market: A Beginner's Guide",
    excerpt: "Take your first steps into investing with confidence. Learn how to analyze stocks and build a diversified portfolio.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop",
    link: "/blog/beginners-guide-stock-market"
  },
  {
    id: 3,
    category: "Personal Finance",
    title: "Mastering Your Budget: Tips for Financial Freedom",
    excerpt: "Effective budgeting is the cornerstone of financial success. Here is how you can take control of your expenses today.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2000&auto=format&fit=crop",
    link: "/blog/mastering-your-budget"
  }
];

export default function BlogHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageThemes, setImageThemes] = useState({});

  useEffect(() => {
    FEATURED_POSTS.forEach(post => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = post.image;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        setImageThemes(prev => ({
          ...prev,
          [post.id]: brightness > 127 ? 'light' : 'dark'
        }));
      };
      img.onerror = () => {
        setImageThemes(prev => ({ ...prev, [post.id]: 'dark' }));
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_POSTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURED_POSTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURED_POSTS.length) % FEATURED_POSTS.length);
  };

  const activeTheme = imageThemes[FEATURED_POSTS[currentSlide].id] || 'dark';

  return (
    <section className={`blog-hero blog-hero--active-${activeTheme}-img`}>
      <div className="blog-hero__slides">
        {FEATURED_POSTS.map((post, index) => {
          const isActive = index === currentSlide;
          const slideTheme = imageThemes[post.id] || 'dark';
          return (
            <div 
              key={post.id} 
              className={`blog-hero__slide ${isActive ? 'active' : ''} blog-hero__slide--${slideTheme}-img`}
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <div className="blog-hero__overlay"></div>
              
              <div className="container blog-hero__content-container">
                <div className="blog-hero__content">
                  <span className="blog-hero__category anim-fade-up">{post.category}</span>
                  <h2 className="blog-hero__title anim-fade-up anim-delay-1">{post.title}</h2>
                  <p className="blog-hero__excerpt anim-fade-up anim-delay-2">{post.excerpt}</p>
                  <div className="anim-fade-up anim-delay-3">
                    <Link to={post.link} className="blog-hero__btn">Read Article</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="blog-hero__controls">
        <div className="container blog-hero__controls-inner">
          <div className="blog-hero__nav">
            <button onClick={prevSlide} className="blog-hero__arrow" aria-label="Previous Slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div className="blog-hero__dots">
              {FEATURED_POSTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`blog-hero__dot ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="blog-hero__arrow" aria-label="Next Slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
