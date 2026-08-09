import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, products, type ProductCategory } from '../data/products'
import ProductCard from './ProductCard'

type Filter = 'All' | ProductCategory

export default function Products() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="products" className="bg-forest-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Our Products
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-forest-900 sm:text-4xl">
            Export-Ready Commodities of Assured Quality
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {(['All', ...categories] as Filter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === cat
                  ? 'bg-forest-700 text-white shadow-md'
                  : 'bg-white text-ink-700 ring-1 ring-forest-100 hover:bg-forest-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
