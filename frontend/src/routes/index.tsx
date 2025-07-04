import { createFileRoute } from '@tanstack/react-router'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { checkUser } from '@/lib/user_helpers'
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
    <main className="min-h-screen flex flex-col p-5 text-black ">
      <div className=" flex flex-col gap-10">
        <Skeleton className="h-56 w-full rounded-sm" />
        <div className=" flex items-center gap-10">
          <Skeleton className="h-[150px] w-[150px] rounded-full" />
          <div className=" flex flex-col  justify-around w-full gap-5">
            <Skeleton className="h-[50px] w rounded-full" />
            <Skeleton className="h-[50px] w-full rounded-full" />
          </div>
        </div>
      </div>
    </main>
  )
}
