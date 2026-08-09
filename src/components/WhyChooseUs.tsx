import { motion } from 'framer-motion'
import {
  FiTruck,
  FiCheckCircle,
  FiDollarSign,
  FiHeadphones,
} from 'react-icons/fi'

const points = [
  {
    icon: FiTruck,
    title: 'Reliable Logistics',
    text: 'End-to-end shipping coordination to ensure consignments are delivered within agreed timelines.',
  },
  {
    icon: FiCheckCircle,
    title: 'Strict Quality Control',
    text: 'Multi-stage inspection at sourcing, packing, and dispatch, in line with international standards.',
  },
  {
    icon: FiDollarSign,
    title: 'Competitive Pricing',
    text: 'Direct sourcing from farms and producers sustains cost efficiency without compromising quality.',
  },
  {
    icon: FiHeadphones,
    title: 'Dedicated Support',
    text: 'A responsive team available to manage documentation, queries, and specific client requirements.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-forest-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Built On Trust, Delivered With Precision
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                <point.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-50/70">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
