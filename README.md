# Goodreign E-Commerce Platform

A premium, Soulection-inspired e-commerce platform for selling physical goods built with Next.js, React, and Stripe integration.

## 🎯 Features

### Core E-Commerce
- ✅ Product catalog with filtering and sorting
- ✅ Shopping cart with persistent storage (Zustand)
- ✅ Multi-step checkout process
- ✅ Payment processing integration (Stripe-ready)
- ✅ Order confirmation and email support (ready to implement)
- ✅ Tax and shipping calculation

### Design
- ✅ Soulection-inspired minimalist aesthetic
- ✅ Dark/light theme with gold accents
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Accessible UI components

### Technical
- ✅ Built with Next.js 14 (App Router)
- ✅ TypeScript for type safety
- ✅ Zustand for state management
- ✅ CSS Modules for scoped styling
- ✅ Production-ready code structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the repository
cd goodreign.com

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
goodreign.com/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles & design system
│   ├── page.tsx                # Home page
│   ├── products/
│   │   ├── page.tsx            # Products catalog
│   │   └── products.module.css # Products styles
│   ├── cart/
│   │   ├── page.tsx            # Shopping cart
│   │   └── cart.module.css     # Cart styles
│   └── checkout/
│       ├── page.tsx            # Multi-step checkout
│       └── checkout.module.css # Checkout styles
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Header.module.css       # Header styles
│   ├── Footer.tsx              # Footer
│   └── Footer.module.css       # Footer styles
├── lib/
│   ├── cartStore.ts            # Zustand cart store
│   └── products.ts             # Product database
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🛍️ Key Pages

### Home (`/`)
- Hero section with CTA
- Featured products showcase
- Why Choose Goodreign section
- Responsive grid layout

### Products (`/products`)
- Complete product catalog
- Filter by category
- Sort by price or featured
- Add to cart functionality
- Product count display

### Shopping Cart (`/cart`)
- View all items in cart
- Adjust quantities
- Remove items
- Real-time totals
- Shipping and tax calculation
- Persistent storage

### Checkout (`/checkout`)
**Step 1: Shipping**
- Customer information form
- Address collection
- Form validation

**Step 2: Payment**
- Credit card information
- Expiry date and CVV
- Security notice
- Order confirmation

**Step 3: Confirmation**
- Order success message
- Shipping details summary
- Continue shopping option

## 💳 Payment Integration (Stripe)

To enable Stripe payments:

1. **Get Stripe API Keys**
   - Visit [stripe.com](https://stripe.com)
   - Create account and get keys

2. **Set Environment Variables**
   Create `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

3. **Install Stripe Libraries** (already in package.json)
   ```bash
   npm install @stripe/react-stripe-js @stripe/stripe-js stripe
   ```

4. **Implement Payment Handling**
   - Update `/app/api/payment` route
   - Add Stripe Elements to payment form
   - Handle payment confirmation

## 🎨 Design System

### Color Palette
```css
--black: #000000
--white: #ffffff
--gold: #d4af37 (primary accent)
--gold-dark: #b8941f
--gold-light: #e8c547
--gray-900 to --gray-100: full gray scale
```

### Typography
- Sans-serif system fonts for body
- Bold, clean headings
- Letter spacing for elegance

### Responsive Breakpoints
- Desktop: 1200px max-width
- Tablet: 768px
- Mobile: 480px

## 📦 Sample Products

The platform comes pre-loaded with 8 sample products:
1. Goodreign Essentials Tee - $35
2. Vinyl Record Holder - $89
3. Goodreign Hoodie - $65
4. Audio Cable Set - $29.99
5. Cassette Tape Box - $24.99
6. Goodreign Beanie - $28
7. Premium Headphone Stand - $45
8. Vinyl Cleaning Kit - $39.99

## 🔧 Customization

### Update Products
Edit `lib/products.ts` to add/modify products:
```typescript
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Your Product',
    price: 99,
    category: 'Category',
    image: 'image-url',
    description: 'Description',
    inStock: true,
  },
  // ... more products
]
```

### Customize Colors
Update CSS variables in `app/globals.css`:
```css
:root {
  --gold: #your-color;
  --gray-900: #your-color;
  /* ... other variables */
}
```

### Modify Shipping/Tax
Update values in cart and checkout pages:
```typescript
const SHIPPING_COST = 10  // Change shipping
const TAX_RATE = 0.13     // Change tax rate
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly buttons
- Mobile navigation menu
- Optimized images
- Fast loading times

## 🔐 Security Considerations

Before going live:
- [ ] Enable HTTPS
- [ ] Set secure Stripe keys in production
- [ ] Implement proper environment variable handling
- [ ] Add CSRF protection
- [ ] Validate all form inputs server-side
- [ ] Implement rate limiting
- [ ] Add logging and monitoring

## 🚀 Next Steps

1. **Setup Stripe Integration**
   - Add Stripe API routes
   - Implement payment processing

2. **Add Product Images**
   - Replace placeholder images
   - Optimize for web

3. **Setup Email Notifications**
   - Order confirmations
   - Shipping updates

4. **Add User Accounts**
   - Authentication (NextAuth)
   - Order history
   - Saved preferences

5. **Analytics & Tracking**
   - Google Analytics
   - Conversion tracking
   - Heatmaps

6. **Inventory Management**
   - Database integration (Prisma/MongoDB)
   - Stock tracking
   - Admin dashboard

## 📞 Support

For issues or questions, contact: support@goodreign.com

## 📄 License

Private. All rights reserved to Goodreign.

---

**Built with intention. Shipped with care.** ✨
