import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>

     <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
       <Layout />
  
    
        
     
        <Component {...pageProps} />
     
   
   </>
}

export default MyApp







