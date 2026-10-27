import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Level() {
  return (
    <Layout>
      <div className="container content-page">
        <Link to="/" className="back-link">← Coral Dev Studios</Link>

        <span className="badge">Calisthenics Training</span>
        <h1>Level</h1>
        <p>
          Level is a calisthenics progress app that turns training into something you can
          actually measure. It builds a personalized skill tree from a short baseline
          assessment, tracks every workout session, and ranks progress on a leaderboard —
          so improvement is visible, not just felt.
        </p>

        <h2>Beta program</h2>
        <ul>
          <li><Link to="/testboard">TestBoard</Link></li>
        </ul>

        <h2>Support</h2>
        <ul>
          <li><Link to="/level/support">Contact support</Link></li>
        </ul>

        <h2>Legal</h2>
        <ul>
          <li><Link to="/level/privacy">Privacy Policy</Link></li>
          <li><Link to="/level/terms">Terms of Service</Link></li>
        </ul>
      </div>
    </Layout>
  )
}
