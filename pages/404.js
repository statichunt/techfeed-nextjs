import React from "react";
import Layout from "@/component/Layout";
import { get404Page } from "@/lib/post";
import { marked } from "marked";

const Error = ({ notFoundData }) => {
  return (
    <Layout title={notFoundData.frontmatter.title}>
      <div className="container text-center font-primary mx-auto">
        <div className="py-32">
          <h1 className="text-h1">{notFoundData.frontmatter.title}</h1>
          <h4 className="text-h4 ">{notFoundData.frontmatter.subTitle}</h4>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(notFoundData.content),
          }}
          className="markdown mt-8"
          //
        ></div>
      </div>
    </Layout>
  );
};

export const getStaticProps = () => {
  const notFoundData = get404Page();
  return {
    props: {
      notFoundData,
    },
  };
};

export default Error;
