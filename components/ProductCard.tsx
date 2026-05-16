'use client'

import { useCartStore } from '@/lib/cartStore'
import styles from './ProductCard.module.css'

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  isNew?: boolean
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          {product.image}
        </div>
        {product.isNew && <span className={styles.newBadge}>New</span>}
      </div>

      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={styles.addButton}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
