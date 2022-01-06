import { getDefaultPage } from "@/lib/post";
import React from "react";
import Layout from "@/component/Layout";
import { marked } from "marked";

const Default = ({ filterPost }) => {
  const { slug, frontmatter, content } = filterPost[0];
  return (
    <Layout title={slug}>
      <div className="container px-4 sm:px-10  my-10 font-secondary mx-auto">
        <h1 className="my-8  text-h1 text-center">{frontmatter.title}</h1>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        ></div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = getDefaultPage();
  const posdtWdraft = posts.filter((d) => d.frontmatter.draft != true);
  const paths = posdtWdraft.map((d) => ({
    params: {
      slug: d.slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = getDefaultPage();
  const filterPost = post.filter((data) => data.slug === slug);

  // Pass post data to the page via props
  return {
    props: {
      filterPost,
    },
  };
}

export default Default;
