'use client'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

export default function Modal({ children }) {
  const overlay = useRef()
  const wrapper = useRef()
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute max-w-[600px] max-h-screen rounded-xl overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12"
      >
        <button
          className="absolute right-0 w-8 h-8 m-2 text-white bg-red-600 rounded-lg"
          id="bt"
          onClick={() => router.back()}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}
