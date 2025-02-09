import Image from 'next/image'
import Link from 'next/link'

export function Profile() {
  return (
    <Link href="/" className="flex items-center gap-2 hover:underline">
      <span className="text-sm">Profile</span>
      <Image
        src="https://avatars.githubusercontent.com/u/55855732?v=4"
        className="h-6 w-6 rounded-full"
        width={24}
        height={24}
        alt=""
      />
    </Link>
  )
}