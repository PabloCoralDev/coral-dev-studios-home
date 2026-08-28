import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container">
          <Link to="/" className="wordmark">
            Coral<span>Dev</span>Studios
          </Link>
          <nav className="site-nav">
            <Link to="/#about">About</Link>
            <Link to="/#work">Work</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <span className="copyright">© {new Date().getFullYear()} Coral Dev Studios</span>
          <a href="mailto:pablo@coraldevstudios.com">pablo@coraldevstudios.com</a>
        </div>
      </footer>
    </div>
  )
}
