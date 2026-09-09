import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import './BlogList.css';
import './HeroSplit.css'; // For the hero-btn

export default function RecentBlogs() {
  // Get only the 3 most recent posts
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="blog-list-section" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ maxWidth: 'var(--container-max, 1200px)', margin: '0 auto', padding: '0 24px' }}>
        <div className="blog-list__header anim-fade-up">
          <h2 className="blog-list__heading">Blog and News</h2>
          <p className="blog-list__subheading">Insights, strategies, and latest updates to help you grow your wealth.</p>
        </div>

        <div className="blog-list__grid anim-fade-up">
          {recentPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
              <div className="blog-card__image-container">
                <img src={post.image} alt={post.title} className="blog-card__image" />
              </div>

              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="blog-card__category-text">{post.category}</span>
                  <span className="blog-card__date">{post.date}</span>
                </div>

                <div className="blog-card__title-row">
                  <h3 className="blog-card__title">{post.title}</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="blog-card__arrow">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="anim-fade-up" style={{ textAlign: 'center', marginTop: '64px' }}>
          <Link to="/resources/blog" className="hero-btn hero-btn--primary cta-gold-anim" style={{ display: 'inline-flex' }}>
            <span>View Blogs</span>
            <span className="hero-btn__icon" style={{ backgroundColor: 'var(--gold-primary)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
