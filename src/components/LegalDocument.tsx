import { Link } from 'react-router-dom'
import Layout from './Layout'

type LegalDocumentProps = {
  backTo: string
  backLabel: string
  badge?: string
  title: string
  updated: string
  pdfPath: string
  downloadFileName: string
}

export default function LegalDocument({
  backTo,
  backLabel,
  badge,
  title,
  updated,
  pdfPath,
  downloadFileName,
}: LegalDocumentProps) {
  return (
    <Layout>
      <div className="container content-page">
        <Link to={backTo} className="back-link">{backLabel}</Link>

        {badge && <span className="badge">{badge}</span>}
        <h1>{title}</h1>
        <span className="updated">{updated}</span>

        <div className="pdf-frame">
          <iframe src={pdfPath} title={title} loading="lazy" />
        </div>

        <a className="download-button" href={pdfPath} download={downloadFileName}>
          Download PDF
        </a>
        <p className="pdf-fallback-note">
          If the document above doesn't load, please use the download link.
        </p>
      </div>
    </Layout>
  )
}
