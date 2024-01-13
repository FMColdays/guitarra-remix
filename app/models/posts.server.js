export const getPOSTS = async () => {
  try {
    const RESPUESTA = await fetch(`${process.env.API_URL}/posts?populate=*`)
    return await RESPUESTA.json()
  } catch (error) {
    errorApi('los posts')
  }
}

export const getPOST = async (url) => {
  try {
    const RESPUESTA = await fetch(
      `${process.env.API_URL}/posts?filters[url]=${url}&populate=*`
    )
    return await RESPUESTA.json()
  } catch (error) {
    errorApi('el post')
  }
}

const errorApi = (message) => {
  throw new Response('', {
    status: 500,
    statusText: `Hubo un error al  obtener ${message} de la base de datos`
  })
}
