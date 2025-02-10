import React from 'react';
import Image from 'next/image'
import { api } from '@/api';
import { formatPrice } from '@/utils/function';
import { Product } from '@/types/product';
import { ProductDetails } from '@/types/product-details';
import { Metadata } from 'next';


async function getProductDetails(slug: string):Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

// create a assyn function to get metadata from next with title product title from api

export async function generateMetadata({ params }: ProductDetails) : Promise<Metadata> {
  const product = await getProductDetails(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductDetails) {

    const product = await getProductDetails(params.slug)
    
    return (
      <div className="flex items-center ml-10">
        {product.image && (
          <Image
            src={product.image}
            alt={product.title || 'Product Image'}
            width={600}
            height={600}
            quality={100}
            className="hover:scale-105 transition-transform duration-300"
          />
        )}

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-white">{product.title || 'No title'}</h2>
          <p className="text-neutral-400">{product.description || 'No description available.'}</p>

          <div className="flex items-center gap-4">
            <span className="bg-blue-500 px-4 py-2 rounded-full text-white font-bold">
              {formatPrice(product.price || 0)}
            </span>
              <span className="text-neutral-400">
                Em 12x de {formatPrice((product.price || 0) / 12)}
              </span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white">Tamanhos</span>
            <div className="flex gap-2">
              {['P', 'M', 'G', 'GG'].map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 rounded-full bg-neutral-700 text-white hover:bg-neutral-600 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-blue-500 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );

}
