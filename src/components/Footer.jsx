import { Link } from 'react-router-dom'
import { navLinks, profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-title">{profile.name}</h3>
          <p>{profile.intro}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={`mailto:${profile.email}`}>✉ {profile.email}</a></li>
            <li><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>☎ {profile.phone}</a></li>
            <li>📍 {profile.address}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  )
}
