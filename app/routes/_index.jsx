import { getGUITARRAS } from '~/models/guitarras.server'
import { getPOSTS } from '~/models/posts.server'
import { getCURSO } from '~/models/curso.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listadoGuitarras'
import ListadoPost from '~/components/listadoPost'
import Curso from '../components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesCurso from '~/styles/curso.css'
import stylesPosts from '~/styles/blog.css'

export function meta() {
  return [
    { title: 'Inicio' },
    { description: 'Este es un ejemplo de una aplicación de Remix' }
  ]
}

export function links() {
  return [
    { rel: 'stylesheet', href: stylesGuitarras },
    { rel: 'stylesheet', href: stylesCurso },
    { rel: 'stylesheet', href: stylesPosts }
  ]
}

export async function loader() {
  const [GUITARRAS, POSTS, CURSO] = await Promise.all([
    getGUITARRAS(),
    getPOSTS(),
    getCURSO()
  ])

  return {
    guitarras: GUITARRAS.data,
    posts: POSTS.data,
    curso: CURSO.data
  }
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className='contenedor'>
        <ListadoPost posts={posts} />
      </section>
    </>
  )
}

export default Index
