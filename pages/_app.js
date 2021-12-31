import { useState } from "react";
import { AppContext } from "../component/AppContext";
import "../styles/globals.css";
import Head from "next/head";
import perameters from "../content/config.json";

function MyApp({ Component, pageProps }) {
  const [postLength, setPostLength] = useState("");
  const { perameter } = perameters;

  return (
    <>
      <Head>
        <link rel="icon" href={perameter.icon}></link>
      </Head>
      <AppContext.Provider value={[postLength, setPostLength]}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
