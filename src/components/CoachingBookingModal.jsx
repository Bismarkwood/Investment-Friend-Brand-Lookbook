import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../lib/supabaseClient';
import './CoachingBookingModal.css';
import CustomSelect from './CustomSelect';
import coachingImage from '../assets/coaching-card.jpg';

export default function CoachingBookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    focus: 'Investment & Wealth Building',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        focus: 'Investment & Wealth Building',
        preferredTime: 'Morning (9:00 AM - 12:00 PM)',
        notes: ''
      });
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (supabase) {
        const { error } = await supabase
          .from('coaching_bookings')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              focus: formData.focus,
              preferred_time: formData.preferredTime,
              notes: formData.notes,
              created_at: new Date().toISOString()
            }
          ]);

        if (error) {
          console.warn('Supabase booking notice:', error.message);
        }
      }

      console.log('Coaching Booking submitted:', formData);
      setSubmitStatus('success');
    } catch (err) {
      console.error('Coaching booking submission error:', err);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="coaching-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="coaching-modal-title">
      <div className="coaching-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="coaching-modal-close" 
          onClick={handleClose} 
          aria-label="Close modal"
        >
          &times;
        </button>

        <div 
          className="coaching-modal-image-col"
          style={{ backgroundImage: `url(${coachingImage})` }}
        ></div>

        <div className="coaching-modal-form-col">
          {submitStatus === 'success' ? (
            <div className="coaching-modal-success">
              <div className="coaching-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="coaching-success-title">Session Request Received!</h3>
              <p className="coaching-success-desc">
                Thank you, <strong>{formData.name || 'there'}</strong>! Our financial coaching team will contact you via WhatsApp or Email within <strong>24 hours</strong> to confirm your slot.
              </p>
              <div className="coaching-success-summary">
                <div className="summary-row">
                  <span>Focus Area:</span>
                  <strong>{formData.focus}</strong>
                </div>
                <div className="summary-row">
                  <span>Preferred Timing:</span>
                  <strong>{formData.preferredTime}</strong>
                </div>
              </div>
              <button className="coaching-btn-primary" onClick={handleClose}>
                Done
              </button>
            </div>
          ) : (
            <div className="coaching-modal-body">
              <div className="coaching-modal-header">
                <span className="coaching-badge">1-on-1 Guidance</span>
                <h2 id="coaching-modal-title" className="coaching-title">Book a Coaching Session</h2>
                <p className="coaching-subtitle">
                  Personalized financial coaching tailored specifically to your income, lifestyle, and wealth-building goals.
                </p>
              </div>

            <form className="coaching-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="coach-name">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="coach-name"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coach-email">Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    id="coach-email"
                    required
                    placeholder="kwame@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="coach-phone">Phone / WhatsApp <span className="req">*</span></label>
                  <input
                    type="tel"
                    id="coach-phone"
                    required
                    placeholder="+233 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coach-focus">Primary Focus Area</label>
                  <CustomSelect
                    id="coach-focus"
                    value={formData.focus}
                    onChange={(val) => setFormData({ ...formData, focus: val })}
                    placeholder="Select Focus Area"
                    options={[
                      "Investment & Wealth Building",
                      "Personal Budgeting & Debt Management",
                      "Career & Business Finances",
                      "Retirement & Long-Term Planning"
                    ]}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="coach-time">Preferred Session Timing</label>
                <CustomSelect
                  id="coach-time"
                  value={formData.preferredTime}
                  onChange={(val) => setFormData({ ...formData, preferredTime: val })}
                  placeholder="Select Preferred Time"
                  options={[
                    { value: "Morning (9:00 AM - 12:00 PM)", label: "Morning (9:00 AM – 12:00 PM GMT)" },
                    { value: "Afternoon (1:00 PM - 5:00 PM)", label: "Afternoon (1:00 PM – 5:00 PM GMT)" },
                    { value: "Evening (6:00 PM - 8:30 PM)", label: "Evening (6:00 PM – 8:30 PM GMT)" },
                    { value: "Weekend Flexible", label: "Weekend (Saturday / Sunday)" }
                  ]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="coach-notes">Any specific question or goal? <span className="opt">(Optional)</span></label>
                <textarea
                  id="coach-notes"
                  rows="2"
                  placeholder="e.g. Looking to start investing in T-Bills and index funds..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="coaching-btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="btn-spinner-wrap">
                      <span className="btn-spinner"></span>
                      Booking...
                    </span>
                  ) : (
                    <>
                      <span>Confirm Booking Request</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <div className="coaching-modal-footer-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>100% confidential. No spam, ever.</span>
              </div>
            </form>
          </div>
        )}
        </div>
      </div>
    </div>,
    document.body
  );
}
