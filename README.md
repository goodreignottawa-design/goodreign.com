# Goodreign E-Commerce Platform

A premium e-commerce platform built with Next.js, featuring a curated collection of physical goods with Soulection-inspired minimal design.

## Features

✅ **Product Catalog**
- Browse 8+ curated products
- Filter by category (Apparel, Accessories, Storage)
- Sort by price, newest first
- Responsive product grid

✅ **Shopping Cart**
- Add/remove items
- Adjust quantities
- Persistent storage (survives page refresh)
- Real-time total calculations
- Tax & shipping calculations

✅ **Checkout Flow**
- Multi-step checkout process
- Step 1: Shipping address
- Step 2: Payment information
- Step 3: Order confirmation
- Progress indicator

✅ **Payment Ready**
- Stripe integration prepared
- Test card support
- Secure checkout form

✅ **Design**
- Soulection-inspired minimal aesthetic
- Black, white, gold color scheme
- Fully responsive (mobile to desktop)
- Smooth animations and transitions
- Professional UI/UX

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **Payment**: Stripe (ready for integration)
- **Styling**: CSS Modules
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/goodreignottawa-design/goodreign.com.git
cd goodreign.com

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   ├── products/            # Products page
│   ├── cart/                # Shopping cart page
│   └── checkout/            # Checkout flow
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   └── ProductCard.tsx      # Product card component
├── lib/
│   ├── cartStore.ts         # Zustand cart state
│   └── products.ts          # Product database
├── package.json
├── tsconfig.json
└── README.md
```

## Pages

### Home Page (`/`)
- Hero section with CTA
- Featured products showcase
- Why Choose Goodreign section
- Newsletter signup (placeholder)

### Products Page (`/products`)
- Full product catalog
- Category filtering
- Sorting options (price, newest)
- Responsive grid layout

### Shopping Cart (`/cart`)
- View all cart items
- Adjust quantities
- Remove items
- Order summary with totals
- Free shipping for orders over $100

### Checkout (`/checkout`)
- Multi-step form
- Shipping address collection
- Payment information form
- Order confirmation
- Progress tracking

## Customization

### Add Products
Edit `lib/products.ts` to add more products:

```typescript
{
  id: 9,
  name: 'Your Product',
  price: 99.99,
  category: 'Category',
  image: '🎨',
  isNew: true,
}
```

### Customize Colors
Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary-black: #000000;
  --accent-gold: #d4af37;
  /* ... more variables */
}
```

### Stripe Integration
1. Get API keys from [stripe.com](https://stripe.com)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
   STRIPE_SECRET_KEY=sk_...
   ```
3. Create API endpoint for payment processing

## Next Steps

- [ ] Integrate Stripe payment processing
- [ ] Setup database (PostgreSQL/MongoDB)
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Setup order tracking
- [ ] Email notifications
- [ ] Product search functionality
- [ ] Wishlist feature
- [ ] Product reviews/ratings
- [ ] Analytics integration

## Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Support

For issues or questions, please create an issue in the repository.

## License

All rights reserved © 2026 Goodreign
