import React from 'react'
import SEO from '../components/SEO'
import BlogHero from '../components/BlogHero'
import BlogList from '../components/BlogList'
import CtaBanner from '../components/CtaBanner'

export default function Blog() {
  return (
    <div className="blog-page anim-site-enter">
      <SEO 
        title="Personal Finance and Investing in Ghana | Investment Friend"
        description="Explore practical articles on budgeting, saving and investing in Ghana. Find clear explanations, worked examples and insights from the Investment Friend team."
      />
      <main>
        <h1 className="visually-hidden">Practical Guides to Managing Money in Ghana</h1>
        <BlogHero />
        <BlogList />
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
  )
}
