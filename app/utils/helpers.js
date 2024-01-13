export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha)

  const opciones = {
    year: 'numeric',
    day: 'numeric',
    month: 'long'
  }

  return fechaNueva.toLocaleDateString('es-ES', opciones)
}
