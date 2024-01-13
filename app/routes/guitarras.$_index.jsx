import { useLoaderData } from '@remix-run/react'
import { getGUITARRAS } from '~/models/guitarras.server'
import ListadoGuitarras from '../components/listadoGuitarras'

export function meta() {
  return [
    { title: 'Guitarra - Nuestras guitarras' },
    { description: 'Ventas de guitarras, blog de músicas.' }
  ]
}

export async function loader() {
  const guitarras = await getGUITARRAS()
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()

  return <ListadoGuitarras guitarras={guitarras} />
}

export default Tienda
