import Signin from '@/components/authorization/Signin'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AUTH_PAGES } from '@/types/auth_types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authorization')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="w-full h-dvh place-content-center p-2">
      <Tabs
        defaultValue="signup"
        className="w-full h-[80%] text-center items-center place-content-center"
      >
        <TabsList className="w-full md:w-[50%]">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        <Signin contentValue={AUTH_PAGES.SIGNUP} />
        <Signin contentValue={AUTH_PAGES.LOGIN} />
      </Tabs>
    </section>
  )
}
