import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { faqs } from '../data/faqs'

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-cream-50 pb-24 pt-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            FAQ
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-forest-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-ink-500">
            Common questions from trade partners about our products, pricing,
            and export process.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-forest-900">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    size={20}
                    className={`shrink-0 text-forest-600 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-600">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-forest-100 bg-white p-8 text-center shadow-sm">
          <h3 className="font-display text-lg font-bold text-forest-900">
            Still have a question?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
            Our team is happy to walk through specifications, pricing, and
            logistics for your specific requirement.
          </p>
          <Link
            to="/#contact"
            className="mt-5 inline-block rounded-full bg-forest-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
