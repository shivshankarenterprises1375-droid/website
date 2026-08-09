import { motion } from 'framer-motion'
import rice from '../assets/products/Rice.webp'
import coconut from '../assets/products/Coconut.webp'
import metal from '../assets/products/Metal.webp'

const stats = [
  { value: '3', label: 'Core Commodities' },
  { value: '10+', label: 'Years of Trade' },
  { value: '5+', label: 'Countries Served' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-forest-950 via-forest-800 to-forest-600 pt-24"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-forest-500/30 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber-400 ring-1 ring-white/20">
            Established Import &amp; Export House
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Connecting India&apos;s Agricultural Strength to{' '}
            <span className="text-amber-400">Global Markets</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-forest-50/90">
            ShivShankar Enterprises is a professional export-import house
            specializing in agricultural produce and industrial commodities,
            delivering consistent quality and dependable logistics to
            partners worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-900/30 transition hover:-translate-y-0.5 hover:bg-amber-600"
            >
              View Our Product Range
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Request a Consultation
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-forest-50/70 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-5">
            <img
              src={rice}
              alt="Rice"
              className="col-span-2 h-48 w-full rounded-3xl border-4 border-white/20 object-cover shadow-2xl"
            />
            <img
              src={coconut}
              alt="Coconut Husk"
              className="h-40 w-full translate-y-4 rounded-3xl border-4 border-white/20 object-cover shadow-2xl"
            />
            <img
              src={metal}
              alt="Metal Scrap"
              className="h-40 w-full -translate-y-4 rounded-3xl border-4 border-white/20 object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
