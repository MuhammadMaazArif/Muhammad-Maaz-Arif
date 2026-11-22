import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

function ComingSoon({ title }) {
  return (
    <section className="section container" style={{ minHeight: '50vh' }}>
      <h1 className="section-title">{title}</h1>
      <p className="muted">This page is coming soon.</p>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ComingSoon title="About" />} />
          <Route path="/portfolio" element={<ComingSoon title="Portfolio" />} />
          <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
          <Route path="*" element={<ComingSoon title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
