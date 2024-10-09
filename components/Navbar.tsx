'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import ThemeSwitch from './ThemeSwitch';


function Navbar() {
  const [shadow, setShadow] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full bg-white ${shadow ? 'shadow-md' : ''} z-10 transition-shadow`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image className="h-8 w-8" src="./next.svg" alt="Logo" width={32} height={32} />
            <span className="ml-3 text-xl font-semibold">KR Next.js Starter</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
