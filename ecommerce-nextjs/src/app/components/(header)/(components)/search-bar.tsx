import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        placeholder="Search products..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}