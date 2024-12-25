'use client'

import { Details } from '@/components/details'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function PhotoModal() {
  console.log('---- Intercepted Route ----')

  const [open, setOpen] = useState(true)

  const router = useRouter()
  const { id } = useParams()

  function handleClose() {
    setOpen(false)
    setTimeout(() => router.back(), 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <Details id={id as string} onClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
