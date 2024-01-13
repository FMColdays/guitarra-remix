export const getGUITARRAS = async () => {
  try {
    const RESPUESTA = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
    return await RESPUESTA.json()
  } catch (error) {
    errorApi('las guitarras')
  }
}

export const getGUITARRA = async (url) => {
  try {
    const RESPUESTA = await fetch(
      `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`
    )
    return await RESPUESTA.json()
  } catch (error) {
    errorApi('la guitarra')
  }
}

const errorApi = (message) => {
  throw new Response('', {
    status: 500,
    statusText: `Hubo un error al  obtener ${message} de la base de datos`
  })
}
