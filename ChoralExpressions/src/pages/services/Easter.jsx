import { Link } from 'react-router-dom';

function Easter() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=2000&q=80')",
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
                <i className="bi bi-brightness-high-fill text-gold me-3"></i>Easter & Lent
              </h1>
              <p className="lead text-gold fs-4 mb-4">Sacred Music for the Season of Renewal</p>
              <p className="text-light-muted fs-5 mb-4">
                Experience the profound beauty of sacred choral music during the holiest season of the Christian calendar.
              </p>
              <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Book Your Easter Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Sacred Repertoire</h2>
            <p className="section-subtitle">Music that reflects the solemnity and glory of Easter</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-music-note-beamed fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Classical Masterworks</h4>
                  <p className="card-text text-light-muted">
                    Excerpts from Bach's St. Matthew Passion, Handel's Messiah, and other timeless works.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-book fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Traditional Hymns</h4>
                  <p className="card-text text-light-muted">
                    "Christ the Lord Is Risen Today," "O Sacred Head," and beloved Easter hymns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body text-center p-4">
                  <i className="bi bi-heart fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Gospel Celebrations</h4>
                  <p className="card-text text-light-muted">
                    Joyful gospel arrangements celebrating resurrection and new life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Celebrate the Resurrection with Music</h2>
          <p className="text-light-muted mb-4">Let us enhance your Easter worship experience.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default Easter;
