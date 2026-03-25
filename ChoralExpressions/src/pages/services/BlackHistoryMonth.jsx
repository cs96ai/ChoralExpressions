import { Link } from 'react-router-dom';

function BlackHistoryMonth() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2000&q=80')",
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
                <i className="bi bi-music-note-beamed text-gold me-3"></i>Black History Month
              </h1>
              <p className="lead text-gold fs-4 mb-4">Celebrating Heritage and Resilience</p>
              <p className="text-light-muted fs-5 mb-4">
                Deeply moving spirituals, gospel, and historical works that honor the African American experience and celebrate cultural heritage.
              </p>
              <Link to="/?event=Black%20History%20Month#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book This Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Repertoire</h2>
            <p className="section-subtitle">Music that tells the story of strength and hope</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-music-note-list fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Spirituals</h4>
                  <p className="card-text text-light-muted">
                    "Swing Low, Sweet Chariot," "Wade in the Water," and other powerful spirituals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-heart-fill fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Gospel</h4>
                  <p className="card-text text-light-muted">
                    Uplifting gospel music celebrating faith, community, and triumph.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-star-fill fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Contemporary Works</h4>
                  <p className="card-text text-light-muted">
                    Modern compositions by African American composers celebrating heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Honor History Through Music</h2>
          <p className="text-light-muted mb-4">Book us for your Black History Month celebration.</p>
          <Link to="/?event=Black%20History%20Month#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default BlackHistoryMonth;
