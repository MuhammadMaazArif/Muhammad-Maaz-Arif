import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-badge">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </Link>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm" onClick={close}>
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  )
}
