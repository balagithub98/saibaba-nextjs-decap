'use client'

import { useState, useEffect } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button 
        className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      <div className={`mobile-nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/" onClick={closeMenu}>🏠 Home</a>
        <a href="/about" onClick={closeMenu}>📖 About</a>
        <a href="/events" onClick={closeMenu}>📅 Events</a>
        <a href="/contact" onClick={closeMenu}>📞 Contact</a>
      </div>
    </>
  )
}
