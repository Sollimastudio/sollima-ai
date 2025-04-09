import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
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
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

