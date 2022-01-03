
import "../styles/globals.css";
import Head from "next/head";
import perameters from "../config/config.json";

function MyApp({ Component, pageProps }) {
  const { perameter } = perameters;
  return (
    <>
      <Head>
        <link rel="icon" href={perameter.icon}></link>
      </Head>
      
        <Component {...pageProps} />
     
    </>
  );
}

export default MyApp;
