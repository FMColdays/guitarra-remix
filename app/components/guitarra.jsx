import PropTypes from 'prop-types'
import { Link } from '@remix-run/react'

const Guitarra = ({ guitarra }) => {
  const { imagen, precio, url, nombre } = guitarra

  const descripcion = guitarra.descripcion.map((descripcion) =>
    descripcion.children.map((children) => children.text)
  )
  return (
    <article className='guitarra'>
      <img
        src={`${imagen.data.attributes.formats.medium.url}`}
        alt={`imagen guitarra ${nombre}`}
        loading='lazy'
      />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='descripcion'>{descripcion}</p>
        <h2 className='precio'>{precio}</h2>
        <Link to={`/guitarras/${url}`} className='enlace'>
          Ver producto
        </Link>
      </div>
    </article>
  )
}

export default Guitarra

Guitarra.propTypes = {
  guitarra: PropTypes.object
}
