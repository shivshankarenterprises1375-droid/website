import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { articles, getArticleBySlug } from '../data/articles'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug ?? '')

  if (!article) {
    return <Navigate to="/insights" replace />
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <article className="bg-cream-50 pb-24 pt-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-900"
        >
          <FiArrowLeft size={16} /> Back to Knowledge Center
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <span className="inline-block rounded-full bg-forest-100 px-3 py-1 text-xs font-bold text-forest-700">
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-forest-900 sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-1.5 text-sm text-ink-500">
            <FiClock size={14} />
            {article.readTime}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose-content mt-10"
        >
          {article.content.map((block, i) => {
            if (block.type === 'h3') {
              return (
                <h3
                  key={i}
                  className="mt-8 font-display text-xl font-bold text-forest-900 first:mt-0"
                >
                  {block.text}
                </h3>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="mt-4 grid gap-2.5">
                  {block.items?.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-base leading-relaxed text-ink-700"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="mt-4 text-base leading-relaxed text-ink-700 first:mt-0">
                {block.text}
              </p>
            )
          })}
        </motion.div>

        <div className="mt-14 rounded-3xl border border-forest-100 bg-white p-7 text-center shadow-sm">
          <h3 className="font-display text-lg font-bold text-forest-900">
            Have a sourcing requirement in this category?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-500">
            Reach out to our team to discuss specifications, quantities, and
            shipment timelines.
          </p>
          <Link
            to="/#contact"
            className="mt-5 inline-block rounded-full bg-forest-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-800"
          >
            Contact Us
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-lg font-bold text-forest-900">
              Related Reading
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/insights/${r.slug}`}
                  className="rounded-2xl border border-forest-100 bg-white p-5 text-sm font-semibold text-forest-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {r.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
