'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/cartStore'
import styles from './checkout.module.css'

type CheckoutStep = 'shipping' | 'payment' | 'confirmation'

interface ShippingFormData {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  province: string
  postalCode: string
  phone: string
}

interface PaymentFormData {
  cardNumber: string
  expiry: string
  cvc: string
}

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore()
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping')
  const [shippingData, setShippingData] = useState<ShippingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    phone: '',
  })
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: '',
    expiry: '',
    cvc: '',
  })
  const [orderNumber] = useState(`GR${Date.now().toString().slice(-8)}`)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const tax = (subtotal + shipping) * 0.13
  const total = subtotal + shipping + tax

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      shippingData.firstName &&
      shippingData.lastName &&
      shippingData.email &&
      shippingData.address &&
      shippingData.city &&
      shippingData.province &&
      shippingData.postalCode
    ) {
      setCurrentStep('payment')
    } else {
      alert('Please fill in all required fields')
    }
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (paymentData.cardNumber && paymentData.expiry && paymentData.cvc) {
      setCurrentStep('confirmation')
      clearCart()
    } else {
      alert('Please fill in all payment fields')
    }
  }

  if (items.length === 0 && currentStep !== 'confirmation') {
    return (
      <div className={styles.checkoutPage}>
        <div className="container">
          <h1>Checkout</h1>
          <div className={styles.emptyCheckout}>
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
    <div className={styles.checkoutPage}>
      <div className="container">
        <h1>Checkout</h1>

        {/* Progress Indicator */}
        <div className={styles.progressIndicator}>
          <div className={`${styles.step} ${currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'confirmation' ? styles.active : ''}`}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepLabel}>Shipping</div>
          </div>
          <div className={styles.line}></div>
          <div className={`${styles.step} ${currentStep === 'payment' || currentStep === 'confirmation' ? styles.active : ''}`}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepLabel}>Payment</div>
          </div>
          <div className={styles.line}></div>
          <div className={`${styles.step} ${currentStep === 'confirmation' ? styles.active : ''}`}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepLabel}>Confirmation</div>
          </div>
        </div>

        <div className={styles.checkoutLayout}>
          {/* Main Content */}
          <div className={styles.checkoutForm}>
            {currentStep === 'shipping' && (
              <form onSubmit={handleShippingSubmit} className={styles.form}>
                <h2>Shipping Address</h2>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={shippingData.firstName}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={shippingData.lastName}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingData.email}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingData.phone}
                    onChange={handleShippingChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingData.address}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingData.city}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="province">Province/State *</label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={shippingData.province}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="postalCode">Postal Code *</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={shippingData.postalCode}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  Continue to Payment
                </button>
              </form>
            )}

            {currentStep === 'payment' && (
              <form onSubmit={handlePaymentSubmit} className={styles.form}>
                <h2>Payment Information</h2>
                <div className={styles.paymentWarning}>
                  ⚠️ This is a demo. Use test card: <strong>4242 4242 4242 4242</strong>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="4242 4242 4242 4242"
                    value={paymentData.cardNumber}
                    onChange={handlePaymentChange}
                    maxLength={19}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="expiry">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      placeholder="MM/YY"
                      value={paymentData.expiry}
                      onChange={handlePaymentChange}
                      maxLength={5}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="cvc">CVC *</label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      placeholder="123"
                      value={paymentData.cvc}
                      onChange={handlePaymentChange}
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep('shipping')}
                    className="btn-secondary"
                  >
                    ← Back
                  </button>
                  <button type="submit" className="btn-primary">
                    Complete Purchase
                  </button>
                </div>
              </form>
            )}

            {currentStep === 'confirmation' && (
              <div className={styles.confirmation}>
                <div className={styles.confirmationIcon}>✓</div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase. Your order has been placed successfully.</p>
                <div className={styles.orderInfo}>
                  <div>
                    <strong>Order Number:</strong> {orderNumber}
                  </div>
                  <div>
                    <strong>Confirmation email sent to:</strong> {shippingData.email}
                  </div>
                  <div>
                    <strong>Estimated Delivery:</strong> 5-7 business days
                  </div>
                </div>
                <Link href="/products" className="btn-primary">
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className={styles.orderSummary}>
            <h3>Order Summary</h3>

            <div className={styles.summaryItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                  <span className={styles.itemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.summaryBreakdown}>
              <div className={styles.breakdownRow}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.breakdownRow}>
                <span>Shipping:</span>
                <span>
                  {shipping === 0 ? (
                    <span className={styles.free}>FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className={styles.breakdownRow}>
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
