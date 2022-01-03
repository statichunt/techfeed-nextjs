
import Author from "../component/About/Author";
import Post from "../component/Post";
import perameters from "../config/config.json";
import { getAboutData, getPost } from "../lib";
import Layout from "../component/Layout";
import Default from "./[slug]";


const currentDate = new Date();
const Home = ({ posts, page, data }) => {
 
  const { perameter } = perameters;
  const post = posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  return (
    
    <Layout title={perameter.title} icon={perameter.icon} >
     
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
  return {
    props: {
      posts: filterByDate,
      page: +page,
      data: data,
      
    },
  };
};

export default Home;
