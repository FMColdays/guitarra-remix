import { Outlet } from '@remix-run/react'
import { getPOSTS } from '~/models/posts.server'
import styles from '~/styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const POSTS = await getPOSTS()
  return POSTS.data
}

const Blog = () => {
  return (
    <main className='contenedor'>
      <Outlet />
    </main>
  )
}

export default Blog
