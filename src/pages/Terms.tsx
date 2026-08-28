import LegalDocument from '../components/LegalDocument'

export default function Terms() {
  return (
    <LegalDocument
      backTo="/level"
      backLabel="← Level"
      title="Terms of Service"
      updated="Last updated August 24, 2026"
      pdfPath="/legal/level-terms-of-use.pdf"
      downloadFileName="level-terms-of-use.pdf"
    />
  )
}
