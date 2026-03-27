import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Index from '@/pages/Index'
import BpcGuide from '@/pages/BpcGuide'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/guia-bpc" element={<BpcGuide />} />
        </Route>
      </Routes>
      <Toaster />
      <Sonner />
    </Router>
  )
}

export default App
