import PropTypes from 'prop-types'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError
} from '@remix-run/react'
import styles from '~/styles/index.css'
import normalize from '~/styles/normalize.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  return [
    { title: 'Guitarra - Remix' },
    { charset: 'utf-8' },
    { viewport: 'width=device-width, initial-scale=1' }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: normalize
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <Document>
      <p className='error' style={{ backgroundColor: 'red' }}>
        {error.status} {error.statusText}
      </p>
    </Document>
  )
}

Document.propTypes = {
  children: PropTypes.node.isRequired
}

ErrorBoundary.propTypes = {
  error: PropTypes.array
}
