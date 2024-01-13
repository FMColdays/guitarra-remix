import { Link } from '@remix-run/react'
import PropTypes from 'prop-types'
import { formatearFecha } from '~/utils/helpers'

const Post = ({ post }) => {
  const { titulo, url, imagen, publishedAt } = post

  const descripcion = post.contenido.map((contenido) =>
    contenido.children.map((children) => children.text)
  )

  return (
    <article className='post'>
      <img
        className='imagen'
        src={imagen.data.attributes.formats.small.url}
        alt={`Guitarra ${url}`}
      />
      <div className='contenido'>
        <h3>{titulo}</h3>
        <time className='fecha' dateTime={formatearFecha(publishedAt)}>
          {formatearFecha(publishedAt)}
        </time>
        <p className='resumen'>{descripcion}</p>
        <Link className='enlace' to={`/blog/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  )
}

export default Post

Post.propTypes = {
  post: PropTypes.object
}
