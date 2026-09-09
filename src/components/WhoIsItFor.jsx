import React from 'react';
import './WhoIsItFor.css';
import coachingImg from '../assets/coaching-card.jpg';
import seyramImg from '../assets/seyram-profile.jpg';

export default function WhoIsItFor() {
  return (
    <section className="wiif-section">
      <div className="container">
        <div className="wiif-intro" data-reveal="up">
          <span className="section-header__eyebrow wiif-section-eyebrow">IS THIS YOU?</span>
          <h2 className="wiif-heading">Who Coaching Is For</h2>
          <p className="wiif-subheading">Coaching is not just for people in financial trouble. It's for anyone who wants more clarity, more control, and a better plan.</p>
        </div>
        <div className="wiif-bento">

          {/* Col 1 — tall image card */}
          <div className="wiif-card wiif-card--image wiif-card--tall" data-reveal="left">
            <img src={seyramImg} alt="Coaching session" />
          </div>

          {/* Col 2 — stacked: text card top + image card bottom */}
          <div className="wiif-col-stack">
            <div className="wiif-card wiif-card--text wiif-card--flex">
              <span className="wiif-eyebrow">EARNINGS</span>
              <h3 className="wiif-card-title">You're earning well but your money is not growing</h3>
              <p className="wiif-card-desc">Your income is there — but your wealth isn't keeping pace. It's time to put your money to work.</p>
            </div>

            <div className="wiif-card wiif-card--image wiif-card--flex">
              <img src={coachingImg} alt="Investment planning" />
            </div>
          </div>

          {/* Col 3 — stacked: two text cards */}
          <div className="wiif-col-stack">
            <div className="wiif-card wiif-card--text wiif-card--flex">
              <span className="wiif-eyebrow">INVESTING</span>
              <h3 className="wiif-card-title">You want to invest but don't know where to start</h3>
              <p className="wiif-card-desc">From T-Bills to stocks and mutual funds, we'll help you understand your options and build confidence.</p>
            </div>

            <div className="wiif-card wiif-card--text wiif-card--flex">
              <span className="wiif-eyebrow">FRESH START</span>
              <h3 className="wiif-card-title">You've had a setback and need a new plan</h3>
              <p className="wiif-card-desc">No judgment. Just a clear-eyed look at where you are and a practical roadmap forward.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
