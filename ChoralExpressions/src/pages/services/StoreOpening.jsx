import { Link } from 'react-router-dom';

function StoreOpening() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 80px',
        minHeight: '75vh'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <Link to="/#services" className="btn btn-outline-gold btn-sm rounded-pill mb-4">
                <i className="bi bi-arrow-left me-2"></i>Back to Services
              </Link>
              <h1 className="display-3 fw-bold text-white mb-3">
                <i className="bi bi-shop text-gold me-3"></i>Store Openings
              </h1>
              <p className="lead text-gold fs-4 mb-4">Launch with Impact</p>
              <p className="text-light-muted fs-5 mb-4">
                Launch your business with impact—draw crowds and create unforgettable buzz with live choral performance.
              </p>
              <Link to="/?event=Store%20Opening#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Stand Out from the Crowd</h2>
            <p className="section-subtitle">Make your grand opening truly grand</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-megaphone fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Draw Attention</h4>
                  <p className="card-text text-light-muted">
                    Live music creates buzz and attracts foot traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-camera fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Social Media Gold</h4>
                  <p className="card-text text-light-muted">
                    Create shareable moments that amplify your reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-star-fill fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Premium Experience</h4>
                  <p className="card-text text-light-muted">
                    Position your brand as sophisticated and unique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Launch Your Business in Style</h2>
          <p className="text-light-muted mb-4">Create an opening day that people will remember.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Let's Talk
          </a>
        </div>
      </section>
    </>
  );
}

export default StoreOpening;
