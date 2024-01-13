export async function getCURSO() {
  try {
    const RESPUESTA = await fetch(`${process.env.API_URL}/curso?populate=*`)
    return await RESPUESTA.json()
  } catch (error) {
    errorApi('el curso')
  }
}

const errorApi = (message) => {
  throw new Response('', {
    status: 500,
    statusText: `Hubo un error al  obtener ${message} de la base de datos`
  })
}
