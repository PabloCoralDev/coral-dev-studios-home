import LegalDocument from '../components/LegalDocument'

export default function Privacy() {
  return (
    <LegalDocument
      backTo="/level"
      backLabel="← Level"
      title="Privacy Policy"
      updated="Last updated August 24, 2026"
      pdfPath="/legal/level-privacy-policy.pdf"
      downloadFileName="level-privacy-policy.pdf"
    />
  )
}
