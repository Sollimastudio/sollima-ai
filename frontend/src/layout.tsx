import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar';

// layout.tsx
import { AuthProvider } from '@/context/AuthContext' // ✅ Caminho real

export const metadata: Metadata = {
  title: 'Sollima AI',
  description: 'Sistema de Autenticação com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}