import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Level from './pages/Level'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/level" element={<Level />} />
      <Route path="/level/privacy" element={<Privacy />} />
      <Route path="/level/terms" element={<Terms />} />
      {/* Level's paywall currently links to these top-level paths directly -
          redirect so those links keep working without needing an app rebuild */}
      <Route path="/privacy" element={<Navigate to="/level/privacy" replace />} />
      <Route path="/terms" element={<Navigate to="/level/terms" replace />} />
    </Routes>
  )
}

export default App
