'use client'

import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import styles from './page.module.css'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Goodreign</h1>
          <p>Curated collection of premium physical goods for the modern lifestyle</p>
          <Link href="/products" className="btn-primary">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className="container">
          <h2 className="text-center">Featured Products</h2>
          <div className="grid grid-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Goodreign */}
      <section className={styles.whySection}>
        <div className="container">
          <h2 className="text-center">Why Choose Goodreign</h2>
          <div className="grid grid-3">
            <div className={styles.featureCard}>
              <h3>Premium Quality</h3>
              <p>Carefully curated selection of the finest physical goods</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Fast Shipping</h3>
              <p>Quick delivery to your door with tracking</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Customer First</h3>
              <p>24/7 support and hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Explore?</h2>
          <p>Browse our complete collection of curated physical goods</p>
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  )
}
