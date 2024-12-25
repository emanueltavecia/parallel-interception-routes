'use client'

import { Details } from '@/components/details'
import { useParams, useRouter } from 'next/navigation'

export default function Photo() {
  console.log('---- Original Route ----')

  const router = useRouter()
  const { id } = useParams()

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <Details id={id as string} onClose={() => router.push('/')} />
      </div>
    </div>
  )
}
