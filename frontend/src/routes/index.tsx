import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { checkUser } from '@/lib/user_helpers'

import { useQuery } from '@tanstack/react-query'
import { userStore } from '@/store/userStore'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: checkUser,
  })
  if (data) userStore.setState(data)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center  text-black ">
      <Button>Click me</Button>
    </main>
  )
}
