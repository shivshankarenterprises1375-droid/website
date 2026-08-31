import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/brand/Logo_Shivshankar_Enterprises.jpg'

const sectionLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'products', label: 'Products' },
  { id: 'testimonials', label: 'Testimonials' },
]

const pageLinks = [
  { path: '/insights', label: 'Insights' },
  { path: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolledPast, setScrolledPast] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const solid = scrolledPast || !isHome

  useEffect(() => {
    const onScroll = () => {
      setScrolledPast(window.scrollY > 20)

      if (!isHome) return
      let current = 'home'
      for (const link of sectionLinks) {
        const el = document.getElementById(link.id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = link.id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const handleSectionClick = (id: string) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid ? 'bg-cream-50/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
          <img
            src={logo}
            alt="ShivShankar Enterprises"
            className="h-11 w-11 rounded-none object-cover ring-2 ring-forest-600/30"
          />
          <span
            className={`font-display text-lg font-bold tracking-tight ${
              solid ? 'text-forest-900' : 'text-white'
            }`}
          >
            ShivShankar Enterprises
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleSectionClick(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isHome && activeSection === link.id
                    ? 'bg-amber-500 text-white'
                    : solid
                    ? 'text-ink-700 hover:bg-forest-100 hover:text-forest-800'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          {pageLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  location.pathname.startsWith(link.path)
                    ? 'bg-amber-500 text-white'
                    : solid
                    ? 'text-ink-700 hover:bg-forest-100 hover:text-forest-800'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSectionClick('contact')}
          className="hidden rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-800 lg:inline-block"
        >
          Request a Quote
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded transition-all ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            } ${solid || menuOpen ? 'bg-forest-900' : 'bg-white'}`}
          />
          <span
            className={`h-0.5 w-6 rounded transition-all ${menuOpen ? 'opacity-0' : ''} ${
              solid ? 'bg-forest-900' : 'bg-white'
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded transition-all ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            } ${solid || menuOpen ? 'bg-forest-900' : 'bg-white'}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-forest-100 bg-cream-50 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleSectionClick(link.id)}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold ${
                    isHome && activeSection === link.id
                      ? 'bg-amber-500 text-white'
                      : 'text-ink-700 hover:bg-forest-100'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            {pageLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold ${
                    location.pathname.startsWith(link.path)
                      ? 'bg-amber-500 text-white'
                      : 'text-ink-700 hover:bg-forest-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleSectionClick('contact')}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-ink-700 hover:bg-forest-100"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
