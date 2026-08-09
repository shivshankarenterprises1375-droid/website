import { motion } from 'framer-motion'
import type { Product } from '../data/products'

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group overflow-hidden rounded-3xl border border-forest-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-forest-800 shadow">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-forest-900">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{product.description}</p>
      </div>
    </motion.div>
  )
}
