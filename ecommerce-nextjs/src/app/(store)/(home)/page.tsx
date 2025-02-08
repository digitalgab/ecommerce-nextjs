import { ProductCard } from './(components)/product-card'

export default function HomePage() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <ProductCard
        src="/moletom-never-stop-learning.png"
        name="Moletom Never Stop Learning"
        price="R$129"
        href="/"
        colSpan={6}
        rowSpan={6}
        bottom={28}
        right={28}
      />
      
      <ProductCard
        src="/moletom-java.png"
        name="Moletom AI Side"
        price="R$129"
        href="/"
        colSpan={3}
        rowSpan={3}
        bottom={10}
        right={10}
      />
      
      <ProductCard
        src="/camiseta-dowhile-2022.png"
        name="Camiseta DoWhile 2022"
        price="R$129"
        href="/"
        colSpan={3}
        rowSpan={3}
        bottom={10}
        right={10}
      />
    </div>
  )
}
