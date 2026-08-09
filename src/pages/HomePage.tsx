import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    let lastHeight = -1
    let stableChecks = 0

    // Page height jumps shortly after mount (images/fonts settling), so
    // poll until it stops changing before jumping to the target section —
    // a fixed delay landed on a stale, shorter layout and undershot it.
    // The jump itself uses instant (not smooth) scrolling: a smooth scroll
    // that gets interrupted mid-animation by a later layout shift silently
    // freezes partway, which is exactly what a fixed delay + smooth scroll
    // produced here.
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })

    const interval = window.setInterval(() => {
      const height = document.documentElement.scrollHeight
      if (height === lastHeight) {
        stableChecks++
      } else {
        stableChecks = 0
        lastHeight = height
      }
      if (stableChecks >= 3) {
        clearInterval(interval)
        jump()
        // One more correction shortly after, in case something (e.g. a
        // late-decoding image) shifts layout right after we judged it stable.
        window.setTimeout(jump, 250)
      }
    }, 60)

    const maxWait = window.setTimeout(() => {
      clearInterval(interval)
      jump()
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(maxWait)
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <Contact />
    </>
  )
}
