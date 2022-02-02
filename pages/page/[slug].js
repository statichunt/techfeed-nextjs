import React from "react";
import { getIndexData, getPost } from "@/lib/post";
import config from "config/config.json";
import Layout from "@/component/Layout";
import Author from "@/component/About/Author";
import Post from "@/component/Post";

const Posts = ({ posts, data, page }) => {
  const { perameter } = config;
  const post = posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  return (
    <Layout title={perameter.title} icon={perameter.icon}>
      <Author data={data}></Author>
      <Post value={post} page={page}></Post>
    </Layout>
  );
};

export default Posts;

export const getStaticPaths = () => {
  const posts = getPost();
  const { pagination } = config.perameter;
  let paths = [];
  const numOfPage = Math.ceil(posts.length / pagination);
  for (let i = 0; i <= numOfPage; i++) {
    paths.push({
      params: {
        slug: i.toString(),
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const page = parseInt((params && params.slug) || 1);
  const getPosts = getPost();
  const posts = getPosts.filter((p) => p.frontmatter.draft != true);

  const data = getIndexData("content");

  return {
    props: {
      posts: posts,
      page: +page,
      data: data,
    },
  };
};
