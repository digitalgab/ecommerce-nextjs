import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  image: string
  name: string
  price: string
  href: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  href,
}) => (
  <Link
    href={href}
    className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
  >
    <Image
      src={image}
      className="group-hover:scale-105 transition-transform duration-500"
      width={920}
      height={920}
      quality={100}
      alt={name}
    />

    <div className="absolute bottom-10 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-3">
      <span className="text-sm truncate">{name}</span>
      <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
        {price}
      </span>
    </div>
  </Link>
)

