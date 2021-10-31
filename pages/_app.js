import Layout from '../component/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
