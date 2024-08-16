'use client'

import { useRouter } from 'next/navigation'

export default function AddToCartButton({ product }) {
  const router = useRouter()

  const addToCart = (slug, quantity, price) => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} of ${slug} to cart at ${price} each`)
    // Optionally, you can use router.push('/cart') to redirect after adding to cart
  }

  return (
    <button 
      onClick={() => addToCart(product.attributes.slug, 1, product.attributes.price)} 
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
    >
      Add to Cart
    </button>
  )
}