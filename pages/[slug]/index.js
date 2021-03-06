import { getDefaultPage } from "@/lib/post";
import React from "react";
import Layout from "@/component/Layout";
import { marked } from "marked";

const Default = ({ filterPost }) => {
  const { slug, frontmatter, content } = filterPost[0];
  return (
    <Layout title={slug}>
      <div className="container px-4 sm:px-10 font-secondary mx-auto mb-16 md:mb-24">
        <h1 className="pageTitle font-primary mt-16 md:mt-24">
          {frontmatter.title}
        </h1>
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

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = getDefaultPage();

  const filterPost = post.filter((data) => data.slug === slug);

  return {
    props: {
      filterPost,
    },
  };
}

export default Default;
