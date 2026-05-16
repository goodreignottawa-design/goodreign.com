'use client'

import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import styles from './products.module.css'

type Category = 'all' | 'apparel' | 'accessories' | 'storage'
type SortBy = 'featured' | 'price-low' | 'price-high' | 'newest'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [sortBy, setSortBy] = useState<SortBy>('featured')

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = products.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    let sorted = [...filtered]
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        break
    }

    return sorted
  }, [selectedCategory, sortBy])

  const categories: Category[] = ['all', 'apparel', 'accessories', 'storage']

  return (
    <div className={styles.productsPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Products</h1>
        <p className={styles.pageSubtitle}>Browse our curated collection</p>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category)}
              className={styles.filterSelect}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className={styles.filterSelect}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-4">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className={styles.noProducts}>
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
