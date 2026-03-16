import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import BpcGuide from './pages/BpcGuide'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/guia-bpc" element={<BpcGuide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
