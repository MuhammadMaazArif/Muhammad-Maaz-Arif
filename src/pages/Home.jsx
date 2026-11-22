import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, stats, services, featured, webOfScienceUrl } from '../data.js'

function Portrait() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="portrait">
      {failed ? (
        <div className="portrait-fallback">{profile.initials}</div>
      ) : (
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="pill">
              <span className="dot" /> Available for collaborations
            </span>
            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>
            <p className="muted location">📍 {profile.location}</p>
          </div>
          <div className="hero-media">
            <Portrait />
            <div className="floating-stat">
              <strong>50+</strong>
              <span>Published Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* What I Do */}
      <section className="section container">
        <p className="eyebrow">What I Do</p>
        <h2 className="section-title">Teaching, research &amp; public health impact</h2>
        <p className="section-sub">
          Clinical training, academic teaching and research experience applied to community,
          environmental and occupational health.
        </p>
        <div className="cards">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2 className="section-title">Recent highlights</h2>
            </div>
            <Link to="/portfolio" className="link-arrow">See all work →</Link>
          </div>
          <div className="cards">
            {featured.map((f) => (
              <article key={f.title} className="card work-card">
                <div className="work-meta">
                  <span className="tag">Research</span>
                  <span className="tag tag-green">Ongoing</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <div className="work-foot">
                  <div className="work-tags">
                    <span className="chip">{f.role}</span>
                    <span className="chip">Web of Science</span>
                  </div>
                  <a href={webOfScienceUrl} target="_blank" rel="noreferrer" className="link-arrow">
                    View profile →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section container">
        <div className="cta">
          <h2>Let’s work together</h2>
          <p>
            Interested in a research collaboration, teaching, speaking invitation or public health
            consultancy? I’d love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
