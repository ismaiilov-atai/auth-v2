import { Button, buttonVariants } from './ui/button'
import { useStore } from '@tanstack/react-store'
import { ACCESS_TOKEN } from '@/lib/constants'
import { userStore } from '@/store/userStore'
import { Link } from '@tanstack/react-router'
import { toast } from 'sonner'

export default function Header() {
  const user = useStore(userStore, (state) => state['user'])

  const signout = () => {
    localStorage.removeItem(ACCESS_TOKEN)
    userStore.setState({ user: '' })
    toast.success('You are succefully signed out')
  }

  return (
    <header className="p-2 flex gap-2 shadow-sm text-black justify-between items-center px-4 sticky top-0 z-50">
      <div>Auth V2</div>
      <nav className="flex gap-2 ">
        {user.length ? (
          <Button variant="ghost" onClick={signout}>
            Signout
          </Button>
        ) : (
          <Link
            to="/authorization"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Signup
          </Link>
        )}
      </nav>
    </header>
  )
}
