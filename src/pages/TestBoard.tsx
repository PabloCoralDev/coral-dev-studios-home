import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function TestBoard() {
  return (
    <Layout>
      <div className="container content-page">
        <Link to="/" className="back-link">← Coral Dev Studios</Link>

        <span className="badge">Beta Program Platform</span>
        <h1>TestBoard</h1>
        <p>
          TestBoard runs the beta program for <Link to="/level">Level</Link>. Testers sign up,
          get their TestFlight access, and submit scheduled feedback reports and bug reports
          from a single dashboard — while a separate admin console handles review, follow-up,
          and access control.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>Tester signup with an intake survey and terms acknowledgment</li>
          <li>PIN-based login with lockout after repeated failed attempts</li>
          <li>One-time TestFlight links, claimed atomically from a preloaded pool</li>
          <li>Four scheduled weekly PDF reports with due dates, grace periods, and resubmission</li>
          <li>Bug reporting with screenshots, compressed in the browser before upload</li>
          <li>Admin console to review testers, reject reports, triage bugs, and revoke access</li>
        </ul>

        <h2>Built with</h2>
        <p>Next.js, React, Supabase (Postgres with row-level security), Tailwind, Resend, and Vercel.</p>

        <h2>Live</h2>
        <ul>
          <li>
            <a href="https://testboard-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
              testboard-pi.vercel.app
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
