import rice from '../assets/products/Rice.webp'
import coconut from '../assets/products/Coconut.webp'
import metal from '../assets/products/Metal.webp'

export type ProductCategory = 'Grains' | 'Other'

export interface Product {
  name: string
  category: ProductCategory
  image: string
  description: string
}

export const categories: ProductCategory[] = ['Grains', 'Other']

export const products: Product[] = [
  {
    name: 'Rice',
    category: 'Grains',
    image: rice,
    description:
      'Basmati and non-basmati rice varieties, processed to consistent grain length and aroma, supplied in accordance with export-grade specifications.',
  },
  {
    name: 'Coconut Husk',
    category: 'Other',
    image: coconut,
    description:
      'Semi-husked coconuts with natural fiber retained, suited to industrial processing and downstream manufacturing applications.',
  },
  {
    name: 'Metal Scrap',
    category: 'Other',
    image: metal,
    description:
      'Graded metal scrap and recyclable materials, sourced and processed to support sustainable, circular-economy supply chains.',
  },
]
