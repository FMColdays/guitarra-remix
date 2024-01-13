import { getPOST } from '~/models/posts.server'
import { useLoaderData } from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers'

export function meta(data) {
  return [
    { title: `Guitarra - Blog ${data.titulo}` },
    { description: `Este blog trata de ${data.titulo}` }
  ]
}

export async function loader({ params }) {
  const POST = await getPOST(params.postUrl)
  if (POST.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }
  return POST.data[0].attributes
}

const Post = () => {
  const POST = useLoaderData()
  const { titulo, url, imagen, publishedAt } = POST
  const descripcion = POST.contenido.map((contenido) =>
    contenido.children.map((children) => children.text)
  )

  return (
    <article className='post mt-3'>
      <img
        className='imagen'
        src={imagen.data.attributes.url}
        alt={`Post ${url}`}
      />
      <div className='contenido'>
        <h1>{titulo}</h1>
        <time className='fecha' dateTime={formatearFecha(publishedAt)}>
          {formatearFecha(publishedAt)}
        </time>
        <p className='texto'>{descripcion}</p>
      </div>
    </article>
  )
}

export default Post
