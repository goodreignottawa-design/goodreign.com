export interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Goodreign Essentials Tee',
    price: 35.0,
    category: 'Apparel',
    image: '👕',
    isNew: true,
  },
  {
    id: 2,
    name: 'Vinyl Record Holder',
    price: 89.0,
    category: 'Storage',
    image: '💿',
  },
  {
    id: 3,
    name: 'Goodreign Hoodie',
    price: 65.0,
    category: 'Apparel',
    image: '🧥',
  },
  {
    id: 4,
    name: 'Cassette Tape Box Set',
    price: 24.99,
    category: 'Storage',
    image: '📼',
  },
  {
    id: 5,
    name: 'Premium Audio Cable Set',
    price: 29.99,
    category: 'Accessories',
    image: '🔌',
  },
  {
    id: 6,
    name: 'Goodreign Beanie',
    price: 28.0,
    category: 'Apparel',
    image: '🧢',
    isNew: true,
  },
  {
    id: 7,
    name: 'Headphone Stand',
    price: 45.0,
    category: 'Accessories',
    image: '🎧',
  },
  {
    id: 8,
    name: 'Turntable Cleaning Kit',
    price: 34.99,
    category: 'Accessories',
    image: '🎵',
  },
]
