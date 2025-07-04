import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center  text-black ">
      <Button>Click me</Button>
    </main>
  )
}
