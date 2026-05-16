'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/cartStore'
import styles from './Header.module.css'

export default function Header() {
  const { items } = useCartStore()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          Goodreign
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart" className={styles.cartLink}>
            Cart
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
