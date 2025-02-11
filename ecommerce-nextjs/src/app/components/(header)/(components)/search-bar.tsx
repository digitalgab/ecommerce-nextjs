'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation';

export function SearchBar() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const query = formData.get("q");
  
    router.push(`/product/search?q=${query}`);
  }

  return (
    <form onSubmit={handleSubmit}
    className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}