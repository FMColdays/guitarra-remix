/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types'

const Curso = ({ curso }) => {
  const { titulo, imagen } = curso

  const descripcion = curso.contenido.map((contenido) =>
    contenido.children.map((children) => children.text)
  )

  return (
    <section className='curso'>
      <style jsx='true'>{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 /0.65),
              rgb(0 0 0 /0.7)
            ),
            url(${imagen.data.attributes.url});
        }
      `}</style>
      <div className='contenedor curso-grid'>
        <div className='contenido'>
          <h2 className='heading'>{titulo}</h2>
          <p className='texto'>{descripcion}</p>
        </div>
      </div>
    </section>
  )
}

Curso.propTypes = {
  curso: PropTypes.object
}

export default Curso
