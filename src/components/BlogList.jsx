import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import './BlogList.css';



const CATEGORIES = ['All', 'Investing', 'Budgeting', 'Wealth Building', 'Market Updates', 'Stories'];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="blog-list-section">
      <div className="container">
        <div className="blog-list__header">
          <h2 className="blog-list__heading">Latest Articles</h2>
          <p className="blog-list__subheading">Insights, strategies, and news to help you grow your wealth.</p>
        </div>

        <div className="blog-list__filters-container">
          <div className="blog-list__categories">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`blog-list__category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-list__search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="blog-list__search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-list__search-input"
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="blog-list__empty">
            <h3>No articles found</h3>
            <p>We couldn't find any articles matching your search.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="blog-list__reset-btn">Reset Filters</button>
          </div>
        ) : (
          <div className="blog-list__grid">
            {filteredPosts.map((post) => (
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
        )}
      </div>
    </section>
  );
}
