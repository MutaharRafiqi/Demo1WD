import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-intro">
          <Link className="wordmark wordmark--footer" to="/" aria-label="Northstar Digital home">
            <span aria-hidden="true" className="wordmark__symbol">N</span>
            <span className="wordmark__name">northstar<span>digital</span></span>
          </Link>
          <p>Thoughtful websites for independent businesses.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <Link to="/services">Services</Link>
          <Link to="/work">Selected work</Link>
          <Link to="/about">About the studio</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Get in touch</span>
          <Link to="/contact">Start a project <span aria-hidden="true">↗</span></Link>
          <span className="footer-note">A demo studio concept</span>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Northstar Digital</span>
        <span className="demo-disclaimer">Portfolio demo — fictional studio, work & testimonials.</span>
      </div>
    </footer>
  )
}
