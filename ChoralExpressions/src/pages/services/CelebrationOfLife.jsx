import { Link } from 'react-router-dom';

function CelebrationOfLife() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1465146633011-14f8e0781093?auto=format&fit=crop&w=2000&q=80')",
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
                <i className="bi bi-flower1 text-gold me-3"></i>Celebration of Life
              </h1>
              <p className="lead text-gold fs-4 mb-4">Honoring Lives with Music</p>
              <p className="text-light-muted fs-5 mb-4">
                Honor loved ones with music that comforts, uplifts, and celebrates a life well lived.
              </p>
              <Link to="/?event=Celebration%20of%20Life#contact" className="btn btn-gold btn-lg rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Plan a Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Music of Comfort and Hope</h2>
            <p className="section-subtitle">Selections that honor and celebrate</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body p-4">
                  <i className="bi bi-music-note-beamed fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Sacred Classics</h4>
                  <p className="card-text text-light-muted">
                    "Amazing Grace," "Ave Maria," and other timeless pieces of comfort.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card service-card h-100 text-white border-0">
                <div className="card-body p-4">
                  <i className="bi bi-heart fs-1 text-gold mb-3 d-block"></i>
                  <h4 className="card-title">Personalized Selections</h4>
                  <p className="card-text text-light-muted">
                    We work with families to include favorite hymns and meaningful songs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Create a Meaningful Tribute</h2>
          <p className="text-light-muted mb-4">Let us help you honor your loved one with beautiful music.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-send me-2"></i>Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default CelebrationOfLife;
