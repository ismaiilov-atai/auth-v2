import { Link } from '@tanstack/react-router'
import { buttonVariants } from './ui/button'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 shadow-sm text-black justify-between items-center px-4 sticky top-0 z-50">
      <div>Auth V2</div>
      <nav className="flex gap-2 ">
        <Link
          to="/authorization"
          className={buttonVariants({ variant: 'ghost' })}
        >
          Signup
        </Link>
      </nav>
    </header>
  )
}
