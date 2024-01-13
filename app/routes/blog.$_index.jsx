import { useLoaderData } from '@remix-run/react'
import { getPOSTS } from '~/models/posts.server'
import ListadoPost from '../components/listadoPost'

export function meta() {
  return [
    { title: 'Guitarra - Nuestros blogs' },
    { description: 'Aquí podrás ver cada uno de nuestros blogs' }
  ]
}

export async function loader() {
  const POSTS = await getPOSTS()
  return POSTS.data
}

const Blog = () => {
  const POSTS = useLoaderData()
  return <ListadoPost posts={POSTS} />
}

export default Blog
