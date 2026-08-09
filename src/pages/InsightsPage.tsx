import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { articles } from '../data/articles'

export default function InsightsPage() {
  return (
    <section className="bg-cream-50 pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Knowledge Center
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-forest-900 sm:text-4xl">
            Trade Insights &amp; Industry Analysis
          </h1>
          <p className="mt-4 text-base text-ink-500">
            Practical, research-backed articles on the commodities we trade and
            the export process behind them — written for buyers, partners, and
            anyone evaluating international agri-trade.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={`/insights/${article.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-forest-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-block w-fit rounded-full bg-forest-100 px-3 py-1 text-xs font-bold text-forest-700">
                  {article.category}
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-forest-900 transition group-hover:text-forest-700">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-forest-100 pt-4 text-xs font-semibold text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <FiClock size={14} />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-amber-600 transition group-hover:gap-2">
                    Read Article <FiArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
