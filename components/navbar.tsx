'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3 } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience & Skills' },
    { href: '/about', label: 'About Me' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span>ML Engineer</span>
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
