import choirImage from '../assets/choir.jpg';

function AboutChoir() {
  return (
    <>
      <section className="service-hero" style={{
        background: "linear-gradient(135deg, rgba(26, 5, 5, 0.9), rgba(13, 13, 13, 0.95)), url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0 60px',
        minHeight: 'auto'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 fw-bold text-white mb-3">
                <i className="bi bi-music-note-list text-gold me-3"></i>About Choral Expressions
              </h1>
              <p className="lead text-gold fs-4 mb-4">33 Voices United in Faith and Song</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="donation-card">
                <div className="text-center mb-5">
                  <h2 className="section-title text-white">Our Story</h2>
                  <div className="mx-auto" style={{width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--gold-primary), var(--gold-light))'}}></div>
                </div>

                <div className="mb-5">
                  <div className="row align-items-center g-4 mb-5">
                    <div className="col-lg-6">
                      <div className="rounded overflow-hidden shadow-lg" style={{border: '3px solid var(--gold-primary)'}}>
                        <img 
                          src={choirImage} 
                          alt="Choral Expressions - 33 Voices United in Faith" 
                          className="img-fluid w-100"
                          style={{display: 'block'}}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <p className="text-light fs-5 mb-4" style={{lineHeight: '1.8'}}>
                        Toronto's <strong className="text-gold">Choral Expressions</strong> is a faith-based collective of 33 exceptional vocalists whose dedication to Christ informs their approach to vocal ministry and devotion to healing through song. Currently under the directorship of the talented veteran Melvin Tolson, Choral Expressions' repertoire is vast and includes musical influences that transcend borders and includes Traditional Spirituals, Anthems, Hymns and Folk music, with nods to celebrated composers and arrangers, Moses Hogan, William Dawson, John Stoddart, and Rosephanye Powell.
                      </p>
                      
                      <p className="text-light fs-5" style={{lineHeight: '1.8'}}>
                        Leaning on the Adventist tradition of musical excellence, the members of Choral Expressions are committed to sharing their collective talents in music ministry across Southern Ontario and beyond.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mt-5">
                  <div className="col-md-4 text-center">
                    <div className="p-4 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-people-fill fs-1 text-gold mb-3 d-block"></i>
                      <h3 className="text-gold mb-2">33</h3>
                      <p className="text-light-muted mb-0">Exceptional Vocalists</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="p-4 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-heart-fill fs-1 text-gold mb-3 d-block"></i>
                      <h3 className="text-gold mb-2">Faith-Based</h3>
                      <p className="text-light-muted mb-0">Ministry Through Music</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="p-4 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                      <i className="bi bi-globe fs-1 text-gold mb-3 d-block"></i>
                      <h3 className="text-gold mb-2">Diverse</h3>
                      <p className="text-light-muted mb-0">Transcendent Repertoire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="section-title text-white">Our Musical Heritage</h2>
                <p className="section-subtitle">Honouring the masters who inspire us</p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-music-note-beamed fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Traditional Spirituals</h4>
                      <p className="card-text text-light-muted">
                        Drawing from the deep well of African American spirituals, we honor the voices of our ancestors who found hope and strength through song.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-book fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Anthems & Hymns</h4>
                      <p className="card-text text-light-muted">
                        Our repertoire includes powerful anthems and beloved hymns that uplift congregations and celebrate our shared faith.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-globe-americas fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Classical Music</h4>
                      <p className="card-text text-light-muted">
                        Featuring composers including Handel, Bach, Mendelssohn, Beethoven and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-star-fill fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Contemporary Masters</h4>
                      <p className="card-text text-light-muted">
                        Featuring works arranged/composed by Moses Hogan, William Dawson, John Stoddart, Rosephanye Powell, John Rutter, Howard Helvey and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title text-white mb-4">Our Mission</h2>
              <div className="donation-card">
                <i className="bi bi-heart-pulse fs-1 text-gold mb-4 d-block"></i>
                <p className="text-light fs-5 mb-4" style={{lineHeight: '1.8'}}>
                  We believe in the healing power of music and the transformative nature of worship through song. Our mission is to share the gift of choral music as a ministry, bringing comfort, joy, and inspiration to communities across Southern Ontario and beyond.
                </p>
                <p className="text-gold fs-5 fst-italic">
                  "Where faith meets harmony, healing begins."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-burgundy text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Experience Our Ministry</h2>
          <p className="text-light-muted mb-4">Invite Choral Expressions to share our gift of music with your community.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-envelope me-2"></i>Book Us for Your Event
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutChoir;
