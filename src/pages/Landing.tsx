import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'

export default function Landing() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <Layout>
      <Reveal>
        <section className="hero">
          <div aria-hidden="true" className="glow glow--hero" />

          <div className="container">
            <h1>An independent studio building software end to end.</h1>
            <p>
              Coral Dev Studios is Pablo Coral's freelance app development practice —
              design, engineering, and shipping, handled by one person who builds things properly.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section id="about" className="section">
          <div className="container">
            <h2 data-index="01">About</h2>
            <p className="about-text">
              Pablo is an Aerospace Engineering and Piano Performance double major at the
              University of Florida, with a background spanning hands-on engineering — an
              internship at <strong>Piper Aircraft</strong>, teaching CNC machining and DFMA
              principles at UF's Design &amp; Manufacturing Lab — and full-stack software
              development. He currently also serves as Lead Ops Officer at{' '}
              <strong>Knead</strong>, a quantitative trading platform, and founded{' '}
              <strong>Bike Bros Gainesville</strong>, a bicycle refurbishment business. Coral Dev
              Studios is where that same build-it-properly approach goes into software.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section id="work" className="section section--work">
          <div aria-hidden="true" className="glow glow--work" />
          <div className="container">
            <h2 data-index="02">Work</h2>
            <Link to="/level" className="work-card">
              <h3>Level</h3>
              <p>
                A calisthenics progress app — personalized skill trees, workout tracking, and a
                leaderboard, built to make training measurable.
              </p>
              <span className="arrow">View project →</span>
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal delay={240}>
        <section id="contact" className="section">
          <div className="container">
            <h2 data-index="03">Contact</h2>
            <a href="mailto:pablo@coraldevstudios.com" className="contact-link">
              pablo@coraldevstudios.com
            </a>
          </div>
        </section>
      </Reveal>
    </Layout>
  )
}
