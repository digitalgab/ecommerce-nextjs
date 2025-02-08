import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  src: string
  name: string
  price: string
  href: string
  colSpan: number
  rowSpan: number
  bottom: number
  right: number
}

export const ProductCard: React.FC<ProductCardProps> = ({
  src,
  name,
  price,
  href,
  colSpan,
  rowSpan,
  bottom,
  right,
}) => {
  return (
    <Link
      href={href}
      className={`group relative col-span-${colSpan} row-span-${rowSpan} rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end`}
    >
      <Image
        src={src}
        className="group-hover:scale-105 transition-transform duration-500"
        width={920}
        height={920}
        quality={100}
        alt={name}
      />

      <div
        className={`absolute bottom-${bottom} right-${right} h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5`}
      >
        <span className="text-sm truncate">{name}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {price}
        </span>
      </div>
    </Link>
  )
}