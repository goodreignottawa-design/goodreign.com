'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/cartStore'
import styles from './cart.module.css'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const tax = (subtotal + shipping) * 0.13
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className={styles.emptyCart}>
            <p>Your cart is empty</p>
            <Link href="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className={styles.cartLayout}>
          {/* Cart Items */}
          <div className={styles.cartItems}>
            <table className={styles.cartTable}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className={styles.productInfo}>
                        <div className={styles.productInitial}>
                          {item.name.charAt(0)}
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className={styles.quantity}>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeItem(item.id)}
                        className={styles.removeBtn}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping:</span>
              <span>
                {shipping === 0 ? (
                  <span className={styles.free}>FREE ✓</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>

            <div className={styles.summaryRow}>
              <span>Tax (13%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <p className={styles.freeShippingNote}>
              {shipping === 0
                ? '✓ You qualify for free shipping!'
                : `Free shipping on orders over $100. Add $${(100 - subtotal).toFixed(2)} more.`}
            </p>

            <Link href="/checkout" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
              Proceed to Checkout
            </Link>

            <Link href="/products" className="btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block', marginTop: '10px' }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
