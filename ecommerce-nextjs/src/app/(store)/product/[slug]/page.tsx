import React from 'react';
import Image from 'next/image'
import { api } from '@/api';
import { formatPrice } from '@/utils/function';

interface ProductDetailsProps {
  slug: string;
}

async function getProductDetails(slug: string) {
  const response = await api('/products/');  
  return response.json();
}

export default async function ProductDetails({ slug }: ProductDetailsProps) {
  const product = await getProductDetails(slug);

  return (
    <div className="flex items-center ml-10">
      <Image
        src={product[0].image}
        alt={product[0].name}
        width={600}
        height={600}
        className="hover:scale-105 transition-transform duration-300"
      />

      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-white">{product[0].title}</h2>
        <p className="text-neutral-400">{product[0].description}</p>

        <div className="flex items-center gap-4">
        <span className="bg-blue-500 px-4 py-2 rounded-full text-white font-bold">
          {formatPrice(product[0].price)}
        </span>
          <span className="text-neutral-400">
            Em {product[0].installments}x de {formatPrice(product[0].price / product[0].installments)}
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