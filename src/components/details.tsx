import { Button } from './ui/button'

export function Details({
  id,
  onClose,
}: {
  id: string | number
  onClose: () => void
}) {
  return (
    <div className="w-full bg-primary text-muted h-44 p-4 flex flex-col gap-2 rounded">
      <p className="text-xl">Emanuel Tavecia</p>
      <p className="text-sm text-muted-foreground">Programador</p>
      <p className="text-xs">{id}</p>
      <Button variant="secondary" className="w-fit" onClick={onClose}>
        Voltar
      </Button>
    </div>
  )
}
