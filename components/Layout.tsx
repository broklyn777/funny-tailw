import Head from 'next/head'
import Header from './Header'

const Layout = () => {
  return (
    <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      <Header />
    </div>
  )
}

export default Layout
