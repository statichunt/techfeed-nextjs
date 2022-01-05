import React from "react";
import Contact from "@/component/ContactPage/Contact";
import Layout from "@/component/Layout";

const Contacts = () => {
  const text = "Lora:ital@0;1";
  console.log(text.replace(/:[ital][ital@]+[0-9;]+|:[wght@]+[0-9]\w\w/gi, ""));
  return (
    <Layout title="Get In Touch">
      <Contact></Contact>
    </Layout>
  );
};

export default Contacts;
