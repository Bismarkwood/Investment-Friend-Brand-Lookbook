import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import BlogPostHero from '../components/BlogPostHero';
import CtaBanner from '../components/CtaBanner';
import '../components/BlogList.css'; // For related cards styling
import './BlogDetails.css';

export default function BlogDetails() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === parseInt(id));

  // Scroll to top on mount or when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-details__not-found">
        <h2>Blog post not found</h2>
        <Link to="/blog" className="blog-details__back-link">Return to blog list</Link>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  let relatedPosts = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id);
  
  // If less than 3, fill with most recent from other categories
  if (relatedPosts.length < 3) {
    const otherPosts = BLOG_POSTS.filter(p => p.category !== post.category && p.id !== post.id);
    relatedPosts = [...relatedPosts, ...otherPosts].slice(0, 3);
  } else {
    relatedPosts = relatedPosts.slice(0, 3);
  }

  // Mock reading time calculation based on content length
  const readingTime = Math.max(1, Math.ceil((post.content.length / 5) / 200)) + " min read";

  return (
    <div className="blog-details-page anim-site-enter">
      <main>
        {/* Hero Section */}
        <BlogPostHero post={post} readTime={readingTime} />

        {/* Two Column Layout (TOC + Content) */}
        <section className="blog-details__body-section">
          <div className="blog-details__body-grid">
            
            {/* Sidebar (Left) */}
            <aside className="blog-details__sidebar">
              <div className="blog-details__sidebar-sticky">
                
                {/* Social Share */}
                <div className="blog-details__share">
                  <h4 className="blog-details__share-title">Share Article</h4>
                  <div className="blog-details__share-links">
                    <button className="blog-details__share-btn" aria-label="Share on Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="blog-details__share-btn" aria-label="Share on LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="blog-details__share-btn" aria-label="Share on Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="blog-details__toc">
                  <h4 className="blog-details__toc-title">Table of Contents</h4>
                  <ul className="blog-details__toc-list">
                    <li><a href="#what-drives-the-fluctuation">What Drives the Fluctuation?</a></li>
                    <li><a href="#why-location-matters">Why Location Matters</a></li>
                    <li><a href="#step-1-audit-your-expenses">Step 1: Audit Your Expenses</a></li>
                    <li><a href="#the-60-40-portfolio">The 60/40 Portfolio</a></li>
                  </ul>
                </div>

              </div>
            </aside>

            {/* Main Content (Right) */}
            <article className="blog-details__content" dangerouslySetInnerHTML={{ __html: post.content }} />

          </div>
        </section>

        {/* Related Blogs Section */}
        {relatedPosts.length > 0 && (
          <section className="blog-details__related-section">
            <div className="blog-details__related-inner">
              <h2 className="blog-details__related-title">Related Articles</h2>
              <div className="blog-list__grid">
                {relatedPosts.map((related) => (
                  <Link to={`/blog/${related.id}`} key={related.id} className="blog-card">
                    <div className="blog-card__image-container">
                      <img src={related.image} alt={related.title} className="blog-card__image" />
                    </div>
                    <div className="blog-card__content">
                      <div className="blog-card__meta">
                        <span className="blog-card__category-text">{related.category}</span>
                        <span className="blog-card__date">{related.date}</span>
                      </div>
                      <div className="blog-card__title-row">
                        <h3 className="blog-card__title">{related.title}</h3>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="blog-card__arrow">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <CtaBanner 
          title={
            <>
              <span style={{
                display: 'block', 
                fontSize: '0.4em', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                color: 'var(--gold-light, #ffd700)',
                marginBottom: '16px'
              }}>
                Newsletter Signup
              </span>
              Get smarter about money <span style={{ whiteSpace: 'nowrap' }}>every week.</span>
            </>
          }
          description="Sign up for our newsletter and instantly download our free Budget Starter Kit."
          showEmailInput={true}
        />
      </main>
    </div>
  );
}
