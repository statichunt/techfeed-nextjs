import React, { useState, useEffect } from "react";
import DropDownMenu from "./NavMenu/DropDownMenu";
import Footer from "./Footer";
import Navbar from "./NavMenu/Navbar";
import Head from "next/head";
import config from "../config/style.json";

const Layout = ({ children, title }) => {
  const { fontFamily } = config.font;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hiddenMenu);

    return () => {
      window.removeEventListener("resize", hiddenMenu);
    };
  });
  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontFamily.secondary}&family=${fontFamily.primary}&display=swap`}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar toggle={toggle} isOpen={isOpen}></Navbar>
      <DropDownMenu isOpen={isOpen} toggle={toggle}></DropDownMenu>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
