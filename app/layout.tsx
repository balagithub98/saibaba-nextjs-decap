import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileMenu from './components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Temple Website',
  description: 'A beautiful temple website with daily content management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="nav-container">
            <a href="/" className="logo">
              🕉️ Sacred Temple
            </a>
            
            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <a href="/">🏠 Home</a>
              <a href="/about">📖 About</a>
              <a href="/events">📅 Events</a>
              <a href="/contact">📞 Contact</a>
            </div>
            
            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Temple. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
