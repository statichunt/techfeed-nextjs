
import BlogPage from "../../component/Blog/BlogPage";
import { getPost } from "../../lib";
import Layout from "../../component/Layout";


const currentDate = new Date();
const Blogs = ({ posts, page }) => {
  return (
    <Layout title="Blog">
      <div className="mx-auto">
        <BlogPage posts={posts} page={page}></BlogPage>
      </div>
    </Layout>
  );
};
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const posts = getPost();

  const filterByDate = posts.filter(
    (post) => new Date(post.frontmatter.date) <= currentDate
  );

  return {
    props: {
      posts: filterByDate,
      page: +page,
    },
  };
};


export default Blogs;

