import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo/Logo Transparent Gradient Gold.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="footer__top">
          <div className="footer__brand-col">
            <img src={logoImg} alt="Investment Friend" className="footer__logo" />
            <p className="footer__tagline">
              Your goals. Your growth.<br/>
              Your financial future, simplified.
            </p>
          </div>
          
          <div className="footer__newsletter-col">
            <h4 className="footer__newsletter-title">Subscribe to our newsletter</h4>
            <p className="footer__newsletter-desc">Get the latest insights, practical tips, and resources delivered directly to your inbox.</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="footer__input" required />
              <button type="submit" className="footer__submit-btn" aria-label="Subscribe">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Middle Section: Navigation & Socials */}
        <div className="footer__middle">
          <div className="footer__nav-grid">
            
            <div className="footer__nav-col">
              <h4 className="footer__col-title">Company</h4>
              <nav className="footer__nav-list">
                <Link to="/" className="footer__link">Home</Link>
                <Link to="/about" className="footer__link">About Us</Link>
                <Link to="/brand" className="footer__link">Brand Identity</Link>
                <Link to="/contact" className="footer__link">Contact</Link>
              </nav>
            </div>

            <div className="footer__nav-col">
              <h4 className="footer__col-title">Services</h4>
              <nav className="footer__nav-list">
                <Link to="/service" className="footer__link">Club</Link>
                <Link to="/service" className="footer__link">Classes</Link>
                <Link to="/service" className="footer__link">Coaching</Link>
              </nav>
            </div>

            <div className="footer__nav-col">
              <h4 className="footer__col-title">Legal</h4>
              <nav className="footer__nav-list">
                <Link to="/privacy" className="footer__link">Privacy Policy</Link>
                <Link to="/terms" className="footer__link">Terms of Service</Link>
                <Link to="/cookies" className="footer__link">Cookie Policy</Link>
              </nav>
            </div>

          </div>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/investment-friend?originalSubdomain=gh" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/investment_friend/?hl=en" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.tiktok.com/@investment_friend" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>
        
        {/* Bottom Section: Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Investment Friend. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
