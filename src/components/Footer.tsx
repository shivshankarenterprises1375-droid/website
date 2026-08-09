import { Link } from 'react-router-dom'
import logo from '../assets/brand/Logo_Shivshankar_Enterprises.jpg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-950 py-10 text-forest-50/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ShivShankar Enterprises" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display font-bold text-white">ShivShankar Enterprises</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/#about" className="hover:text-white">About</Link>
          <Link to="/#products" className="hover:text-white">Products</Link>
          <Link to="/insights" className="hover:text-white">Insights</Link>
          <Link to="/faq" className="hover:text-white">FAQ</Link>
          <Link to="/#contact" className="hover:text-white">Contact</Link>
        </nav>
        <p className="text-sm">
          &copy; {year} ShivShankar Enterprises. All rights reserved. | Delivering Quality Worldwide
        </p>
      </div>
    </footer>
  )
}
