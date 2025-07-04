import { Link } from '@tanstack/react-router'

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800 px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Page not found</p>
      <Link to="/" className="mt-6 text-blue-600 hover:underline text-sm">
        Go back home
      </Link>
    </div>
  )
}
