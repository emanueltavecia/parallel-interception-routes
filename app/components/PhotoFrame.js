'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PhotoFrame({ title, url }) {
  const router = useRouter()
  return (
    <>
      <Image
        alt={title}
        src={url}
        height={600}
        width={600}
        className="object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6 text-center">
        <h3>{title}</h3>
      </div>
    </>
  )
}
