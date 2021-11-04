import ContextWrapper from '../component/ContextWrapper'
import Layout from '../component/Layout'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  
  return <ContextWrapper>
    <Layout><Component {...pageProps} /></Layout>
  </ContextWrapper>
}

export default MyApp
