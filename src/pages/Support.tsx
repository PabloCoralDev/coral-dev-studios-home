import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Support() {
  return (
    <Layout>
      <div className="container content-page">
        <Link to="/level" className="back-link">← Level</Link>

        <h1>Support</h1>
        <p>Have a question, found a bug, or have an idea for Level? Reach out any time at:</p>

        <a href="mailto:pablo@coraldevstudios.com" className="email-display">
          pablo@coraldevstudios.com
        </a>

        <p>
          For the swiftest response, please use one of the subject lines below. Click on a subject to open a pre-filled email!
        </p>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Subject line</th>
                <th>Urgency</th>
                <th>Use it for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="mailto:pablo@coraldevstudios.com?subject=Level%20Critical">
                    Level Critical
                  </a>
                </td>
                <td><span className="urgency-pill urgency-high">High</span></td>
                <td>App crashes, data loss, can't sign in — anything blocking core use.</td>
              </tr>
              <tr>
                <td>
                  <a href="mailto:pablo@coraldevstudios.com?subject=Level%20Issue">
                    Level Issue
                  </a>
                </td>
                <td><span className="urgency-pill urgency-mid">Mid</span></td>
                <td>Something's broken or not behaving as expected.</td>
              </tr>
              <tr>
                <td>
                  <a href="mailto:pablo@coraldevstudios.com?subject=Level%20Suggestion">
                    Level Suggestion
                  </a>
                </td>
                <td><span className="urgency-pill urgency-low">Low</span></td>
                <td>Feature ideas, feedback, or general suggestions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
