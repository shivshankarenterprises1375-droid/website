import { motion } from 'framer-motion'
import { FiGlobe, FiShield, FiUsers } from 'react-icons/fi'

const features = [
  {
    icon: FiGlobe,
    title: 'Global Reach',
    text: 'Serving clients across multiple continents through reliable shipping and logistics networks.',
  },
  {
    icon: FiShield,
    title: 'Quality Assured',
    text: 'Every consignment undergoes rigorous quality control in accordance with international standards.',
  },
  {
    icon: FiUsers,
    title: 'Trusted Partnership',
    text: 'Long-standing relationships built on transparency, reliability, and mutual growth.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-forest-900 sm:text-4xl">
              A Trusted Name in Export-Import Trade
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-700">
              ShivShankar Enterprises is an established export-import
              organization specializing in agricultural produce and
              industrial commodities. Over years of operation in international
              trade, we have developed enduring relationships with reputed
              suppliers and buyers worldwide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              Our disciplined approach to quality assurance, delivery
              timelines, and pricing has positioned us as a dependable partner
              for businesses across markets. Each consignment is sourced from
              verified producers and processed in accordance with
              international trade standards.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <feature.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-forest-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
