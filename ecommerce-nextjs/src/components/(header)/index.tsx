import { Cart } from './(components)/cart'
import { Logo } from './(components)/logo'
import { Profile } from './(components)/profile'
import { SearchBar } from './(components)/search-bar'


export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Logo />
        <SearchBar />
      </div>

      <div className="flex items-center gap-4">
        <Cart />
        <div className="w-px h-4 bg-zinc-700"></div>
        <Profile />
      </div>
    </div>
  )
}