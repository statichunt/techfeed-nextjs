import React from "react";
import Contact from "@/component/ContactPage/Contact";
import Layout from "@/component/Layout";
import config from "../../config/config.json";
import { getContactData } from "@/lib/post";

const Contacts = ({ contactData }) => {
  const { contactFormAction } = config.perameter;
  return (
    <Layout title="Get In Touch">
      <Contact action={contactFormAction} data={contactData}></Contact>
    </Layout>
  );
};

export const getStaticProps = () => {
  const contactData = getContactData();
  return {
    props: {
      contactData,
    },
  };
};

export default Contacts;
