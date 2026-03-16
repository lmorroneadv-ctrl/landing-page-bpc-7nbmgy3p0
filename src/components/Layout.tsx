import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { CookieBanner } from '@/components/CookieBanner'
import { Toaster } from '@/components/ui/sonner'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
      <Toaster theme="dark" />
    </div>
  )
}
