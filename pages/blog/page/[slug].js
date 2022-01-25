import BlogPage from "@/component/Blog/BlogPage";
import Layout from "@/component/Layout";
import { getIndexData, getPost } from "@/lib/post";
import React from "react";
import config from "../../../config/config.json";

const Blog = ({ posts, page, blogData }) => {
  return (
    <Layout title="Blog">
      <div className="mx-auto">
        <BlogPage posts={posts} page={page} blogData={blogData}></BlogPage>
      </div>
    </Layout>
  );
};

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
  const posts = getPosts.filter((data) => data.frontmatter.draft == false);

  const blogData = getIndexData("content/posts");

  return {
    props: {
      posts: posts,
      page: page,
      blogData: blogData,
    },
  };
};
export default Blog;
