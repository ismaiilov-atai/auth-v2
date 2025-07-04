import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { NotFound } from '@/components/NotFound'
import { META_DATA } from '@/lib/constants'
import Header from '../components/Header'
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  head: () => META_DATA,
  notFoundComponent: () => <NotFound />,
  component: () => (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Toaster richColors />
      <TanStackRouterDevtools />
    </RootDocument>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {location.pathname !== '/authorization' && <Header />}
        {children}
        <Scripts />
      </body>
    </html>
  )
}
