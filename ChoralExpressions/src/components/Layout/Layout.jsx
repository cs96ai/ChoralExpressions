import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent" id="mainNav">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-music-note-list me-2"></i>Choral Expressions
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#donate">Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-gold ms-lg-3 px-4" href="/#contact">Book Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer className="site-footer py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="text-gold mb-3">
                <i className="bi bi-music-note-list me-2"></i>Choral Expressions
              </h5>
              <p className="text-light-muted">
                A 33-member mixed-voice choral ensemble dedicated to classical mastery and soulful celebration.
              </p>
            </div>
            <div className="col-lg-4">
              <h5 className="text-gold mb-3">Contact Us</h5>
              <ul className="list-unstyled text-light-muted">
                <li className="mb-2"><i className="bi bi-envelope me-2"></i>cexpressionevents@gmail.com</li>
                <li><i className="bi bi-geo-alt me-2"></i>Toronto, Ontario</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="text-gold mb-3">Follow Us</h5>
              <div className="social-links">
                <a href="#" className="social-icon me-3"><i className="bi bi-facebook fs-4"></i></a>
                <a href="#" className="social-icon me-3"><i className="bi bi-instagram fs-4"></i></a>
                <a href="#" className="social-icon me-3"><i className="bi bi-youtube fs-4"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-twitter-x fs-4"></i></a>
              </div>
            </div>
          </div>
          <hr className="border-gold my-4" />
          <div className="text-center text-light-muted">
            <small>&copy; {new Date().getFullYear()} Choral Expressions. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
