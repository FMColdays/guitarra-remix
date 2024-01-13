import Guitarra from '../components/guitarra'
import PropTypes from 'prop-types'

const ListadoGuitarras = ({ guitarras }) => {
  return (
    <>
      <h2 className='heading'>Nuestra colección</h2>
      {guitarras?.length && (
        <section className='guitarras-grid'>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </section>
      )}
    </>
  )
}

ListadoGuitarras.propTypes = {
  guitarras: PropTypes.array
}

export default ListadoGuitarras
