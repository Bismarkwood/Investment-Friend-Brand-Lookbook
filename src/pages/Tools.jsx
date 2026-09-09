import React from 'react'
import SEO from '../components/SEO'

export default function Tools() {
  return (
    <>
      <SEO 
        title="Free Budgeting Tools and Calculators | Investment Friend" 
        description="Access free budgeting templates, an investment calculator and a financial health checklist. Explore practical money management resources for life in Ghana."
      />
      <main className="tools-page">
        <section className="hero-section hero-section--tools">
          <div className="hero-section__inner" data-reveal>
            <h1 className="hero-section__title">Free Budgeting Tools and Investment Calculators</h1>
            <p className="hero-section__subtitle">
              Practical resources to help you take control of your money.
            </p>
          </div>
        </section>

        <section className="tools-grid-section">
          <div className="tools-grid-section__inner" data-reveal>
            <div className="tools-card">
              <h3>Budget Planner</h3>
              <p>A comprehensive template to manage your monthly income and expenses.</p>
              <button className="tools-btn" disabled>Coming Soon</button>
            </div>
            <div className="tools-card">
              <h3>Investment Calculator</h3>
              <p>Project your wealth growth with our compound interest calculator tailored for the Ghanaian market.</p>
              <button className="tools-btn" disabled>Coming Soon</button>
            </div>
            <div className="tools-card">
              <h3>Financial Health Checklist</h3>
              <p>Assess your current financial standing and identify areas for improvement.</p>
              <button className="tools-btn" disabled>Coming Soon</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
