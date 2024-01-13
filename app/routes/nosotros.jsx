import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
    { title: 'Guitarra - Sobre Nosotros' },
    { description: 'Ventas de guitarras, blog de músicas.' }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt='Imagen nosotros' />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            veniam aut amet suscipit facilis atque harum obcaecati sit quis ipsa
            dolores qui quod consequatur corporis, aperiam earum voluptates
            debitis nisi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Enim, voluptates accusamus animi temporibus illo,
            reprehenderit sunt soluta fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            corrupti voluptatum quam sed quia minus unde laudantium mollitia.
            Cupiditate corporis voluptatibus deleniti cum nesciunt mollitia
            saepe maxime? Perferendis, tempora hic! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quo natus aliquid sequi assumenda
            aspernatur.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
