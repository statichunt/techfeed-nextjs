import { getDefaultPage } from "../../lib";
import React from "react";
import { stringify } from "gray-matter";

const Default = ({ posts }) => {
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};
export default Default;
export const getStaticPaths = async () => {
  const posts = getDefaultPage();
  const paths = posts.map((path) => ({
    params: {
      path: path.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);

  const posts = getDefaultPage();
  return {
    props: {
      path,
      posts,
    },
  };
};
