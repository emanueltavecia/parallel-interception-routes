import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function App() {
  const id = (Math.random() * 100).toFixed(0)
  return (
    <main className="max-w-screen-lg mx-auto flex flex-col gap-10 mt-20 items-center">
      <h1 className="text-center text-4xl font-bold">Interception Routes</h1>
      <div className="">
        <Link href={`/photos/${id}`} className={buttonVariants()}>
          Abrir modal no ID aleatório {id}
        </Link>
      </div>
    </main>
  )
}
