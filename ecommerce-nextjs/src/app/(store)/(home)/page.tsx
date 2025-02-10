import { Product } from '@/types/product'
import { ProductCard } from './(components)/product-card'
import { api } from '@/api'
import { Metadata } from 'next'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function HomePage() {

  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid gap-4">
      <div className="grid max-h-[1280px] col-span-4 row-span-5 gap-6">
        <ProductCard
            image={highlightedProduct.image}
            name={highlightedProduct.title}
            price={highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            href={`/product/${highlightedProduct.slug}`}
            />

      </div>

      <div className="grid max-h-[1280px] row-span-2 col-start-5 gap-6">
        
        {otherProducts.slice(0, 3).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.title}
            price={product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            href={`/product/${product.slug}`}     
            />
        ))}

      </div>
    </div>
  )
}