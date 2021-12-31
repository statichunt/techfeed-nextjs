import React, { useContext, useEffect } from "react";
import Author from "../component/About/Author";
import Post from "../component/Post";
import perameters from "../content/config.json";
import { AppContext } from "../component/AppContext";
import { getAboutData, getPost } from "../lib";
import Layout from "../component/Layout";

const currentDate = new Date();
const Home = ({ posts, page, data }) => {
  const [postLength, setPostLength] = useContext(AppContext);
  const { perameter } = perameters;

  useEffect(() => {
    setPostLength(posts.length);
  });

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

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const posts = getPost();
  const filterByDate = posts.filter(
    (post) => new Date(post.frontmatter.date) <= currentDate
  );
  const data = getAboutData();
  // about page data
  return {
    props: {
      posts: filterByDate,
      page: +page,
      data: data,
    },
  };
};

export default Home;
