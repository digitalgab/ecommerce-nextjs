import { api } from "@/api";
import { Product } from "@/types/product";
import { redirect } from "next/navigation";
import { ProductCard } from "../../(components)/product-card";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = await searchParams;
  if (!query) {
    redirect("/");
    return null;
  }

  const searchProducts = async (searchTerm: string): Promise<Product[]> => {
    const response = await api(`/products/search?q=${searchTerm}`);

    return response.json();
  };

  const products = await searchProducts(query);

  return (
    <div className="flex flex-col ml-10">
      <h3 className="text-4xl font-bold text-white mb-4">
        Resultados para: {query}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.title}
            price={product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            href={`/product/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
}