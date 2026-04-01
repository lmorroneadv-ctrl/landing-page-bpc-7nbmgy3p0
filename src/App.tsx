import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Index from '@/pages/Index'
import BpcGuide from '@/pages/BpcGuide'
import AuxilioAcidenteGuide from '@/pages/AuxilioAcidenteGuide'
import PensaoMorteGuide from '@/pages/PensaoMorteGuide'
import AposentadoriasGuide from '@/pages/AposentadoriasGuide'
import Curriculo from '@/pages/Curriculo'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/guia-bpc" element={<BpcGuide />} />
          <Route path="/guia-auxilio-acidente" element={<AuxilioAcidenteGuide />} />
          <Route path="/guia-pensao-morte" element={<PensaoMorteGuide />} />
          <Route path="/guia-aposentadorias" element={<AposentadoriasGuide />} />
          <Route path="/curriculo" element={<Curriculo />} />
        </Route>
      </Routes>
      <Toaster />
      <Sonner />
    </Router>
  )
}

export default App
