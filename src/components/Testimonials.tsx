import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    quote:
      'ShivShankar Enterprises has been a dependable sourcing partner for our rice imports. Consignments are consistently well-graded, correctly documented, and delivered on schedule.',
    name: 'Import Manager',
    context: 'Wholesale Grain Distributor, UAE',
  },
  {
    quote:
      'What stands out is their attention to packaging and quality checks before dispatch. It has reduced our inspection overhead considerably.',
    name: 'Procurement Lead',
    context: 'Agro-Commodities Trading Firm, Middle East',
  },
  {
    quote:
      'Clear communication at every stage of the shipment, from sourcing to customs paperwork. A partner we return to for repeat orders.',
    name: 'Operations Head',
    context: 'Recycling & Metal Trading Company, Southeast Asia',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-forest-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Client Feedback
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-forest-900 sm:text-4xl">
            What Our Trade Partners Say
          </h2>
          <p className="mt-4 text-sm text-ink-500">
            Representative feedback shared by our import and export partners.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex h-full flex-col rounded-3xl border border-forest-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, star) => (
                  <FiStar key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-forest-100 pt-4">
                <p className="font-display text-sm font-bold text-forest-900">{t.name}</p>
                <p className="text-xs text-ink-500">{t.context}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
