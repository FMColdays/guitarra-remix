import { getGUITARRA } from '~/models/guitarras.server'
import { useLoaderData } from '@remix-run/react'

export async function loader({ params }) {
  const GUITARRA = await getGUITARRA(params.guitarraUrl)
  if (GUITARRA.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return GUITARRA.data[0].attributes
}

export function meta({ data }) {
  return [
    { title: `Guitarra - ${data.nombre}` },
    { description: `La guitarra ${data.nombre} es para ti` }
  ]
}

const Guitarra = () => {
  const GUITARRA = useLoaderData()

  const { imagen, precio, url, nombre } = GUITARRA
  const descripcion = GUITARRA.descripcion.map((descripcion) =>
    descripcion.children.map((children) => children.text)
  )

  return (
    <section className='guitarra'>
      <img
        className='imagen'
        src={imagen.data.attributes.url}
        alt={`Guitarra ${url}`}
      />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <h2 className='precio'>{precio}</h2>
      </div>
    </section>
  )
}

export default Guitarra
