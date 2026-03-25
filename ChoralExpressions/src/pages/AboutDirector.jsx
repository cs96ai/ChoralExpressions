import directorImage from '../assets/director.jpg';

function AboutDirector() {
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
                <i className="bi bi-award text-gold me-3"></i>Our Director
              </h1>
              <p className="lead text-gold fs-4 mb-4">The Visionary Behind the Harmony</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-lg-5">
              <div className="position-relative">
                <div className="rounded overflow-hidden shadow-lg" style={{border: '4px solid var(--gold-primary)'}}>
                  <img 
                    src={directorImage} 
                    alt="Melvin Tolson, Director of Choral Expressions" 
                    className="img-fluid w-100"
                    style={{display: 'block'}}
                  />
                </div>
                <div className="position-absolute bottom-0 start-0 end-0 p-4 text-center" 
                     style={{background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'}}>
                  <h3 className="text-white mb-1">Melvin Tolson</h3>
                  <p className="text-gold mb-0">Artistic Director</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="donation-card">
                <h2 className="section-title text-white mb-4">A Legacy of Excellence</h2>
                <div className="mb-4" style={{width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--gold-primary), var(--gold-light))'}}></div>
                
                <p className="text-light fs-5 mb-4" style={{lineHeight: '1.8'}}>
                  Under the inspired leadership of <strong className="text-gold">Melvin Tolson</strong>, Choral Expressions has flourished into one of Toronto's most distinguished vocal ensembles. A veteran of choral music with decades of experience, Maestro Tolson brings an unparalleled combination of technical mastery, spiritual depth, and artistic vision to every rehearsal and performance.
                </p>

                <p className="text-light fs-5 mb-4" style={{lineHeight: '1.8'}}>
                  His tireless dedication to excellence is evident in every note the choir sings. Whether guiding the ensemble through the intricate harmonies of Moses Hogan's spirituals or the soaring anthems of William Dawson, Maestro Tolson's expertise ensures that each performance is not merely heard, but deeply felt.
                </p>

                <div className="row g-3 mt-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-star-fill text-gold fs-4 me-3 mt-1"></i>
                      <div>
                        <h5 className="text-white mb-1">Musical Excellence</h5>
                        <p className="text-light-muted small mb-0">Decades of experience in choral direction</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-heart-fill text-gold fs-4 me-3 mt-1"></i>
                      <div>
                        <h5 className="text-white mb-1">Faith-Centered</h5>
                        <p className="text-light-muted small mb-0">Ministry through musical artistry</p>
                      </div>
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
                <h2 className="section-title text-white">A Tireless Leader</h2>
                <p className="section-subtitle">Dedication that inspires excellence</p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-lightbulb fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Visionary Artistry</h4>
                      <p className="card-text text-light-muted">
                        Maestro Tolson's artistic vision extends beyond the notes on the page. He cultivates an environment where each vocalist can discover their fullest potential, creating a unified sound that is greater than the sum of its parts. His ability to draw out the emotional and spiritual essence of every piece transforms performances into transcendent experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-people-fill fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Mentor & Teacher</h4>
                      <p className="card-text text-light-muted">
                        Beyond his role as director, Maestro Tolson serves as a mentor and spiritual guide to the choir members. His patient instruction, encouraging words, and unwavering commitment to each singer's growth have created a family atmosphere within the ensemble. He doesn't just teach music—he nurtures souls.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-clock-history fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Unwavering Commitment</h4>
                      <p className="card-text text-light-muted">
                        His dedication knows no bounds. From early morning rehearsals to late-night preparations, from selecting the perfect repertoire to fine-tuning every dynamic and phrase, Maestro Tolson's tireless work ethic sets the standard for the entire ensemble. His passion for excellence is contagious and inspiring.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card service-card h-100 text-white border-0">
                    <div className="card-body p-4">
                      <i className="bi bi-music-note-list fs-2 text-gold mb-3 d-block"></i>
                      <h4 className="card-title mb-3">Cultural Steward</h4>
                      <p className="card-text text-light-muted">
                        Maestro Tolson is deeply committed to preserving and celebrating the rich heritage of African American choral music while also embracing contemporary works and diverse musical traditions. His thoughtful programming honors the past while looking boldly toward the future, ensuring that Choral Expressions remains both rooted and relevant.
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
            <div className="col-lg-8">
              <div className="donation-card text-center">
                <i className="bi bi-quote fs-1 text-gold mb-4 d-block"></i>
                <blockquote className="fs-4 text-white fst-italic mb-4" style={{lineHeight: '1.8'}}>
                  "Music is not just what we do—it is our ministry, our calling, and our gift to the world. Every rehearsal is an act of worship, every performance a testament to faith."
                </blockquote>
                <p className="text-gold fs-5">— The Philosophy of Maestro Melvin Tolson</p>
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
                <h2 className="section-title text-white">The Tolson Touch</h2>
                <p className="section-subtitle">What makes his leadership extraordinary</p>
              </div>

              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="text-center p-4 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                    <i className="bi bi-ear fs-1 text-gold mb-3 d-block"></i>
                    <h5 className="text-white mb-2">Exceptional Ear</h5>
                    <p className="text-light-muted small mb-0">
                      His ability to hear and correct the subtlest nuances in tone, balance, and blend is legendary among the choir members.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center p-4 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                    <i className="bi bi-heart-pulse fs-1 text-gold mb-3 d-block"></i>
                    <h5 className="text-white mb-2">Spiritual Depth</h5>
                    <p className="text-light-muted small mb-0">
                      Every piece is approached as an opportunity for spiritual expression and connection with the divine.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center p-4 rounded" style={{background: 'rgba(212, 175, 55, 0.1)'}}>
                    <i className="bi bi-trophy fs-1 text-gold mb-3 d-block"></i>
                    <h5 className="text-white mb-2">Pursuit of Excellence</h5>
                    <p className="text-light-muted small mb-0">
                      He inspires the choir to reach heights they never thought possible, always with grace and encouragement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-light fs-5 mb-4" style={{lineHeight: '1.8'}}>
                  Under Maestro Tolson's leadership, Choral Expressions has become more than a choir—it is a family, a ministry, and a beacon of musical excellence in the community. His legacy is not just in the beautiful music the choir creates, but in the lives he has touched, the spirits he has lifted, and the countless hearts he has inspired through his tireless dedication to the art of choral music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark text-center py-5">
        <div className="container">
          <h2 className="text-white mb-3">Experience the Tolson Legacy</h2>
          <p className="text-light-muted mb-4">Witness the artistry and passion of Choral Expressions under Maestro Tolson's direction.</p>
          <a href="/#contact" className="btn btn-gold btn-lg rounded-pill px-5">
            <i className="bi bi-calendar-event me-2"></i>Book a Performance
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutDirector;
