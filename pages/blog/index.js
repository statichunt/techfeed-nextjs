
import BlogPage from "../../component/Blog/BlogPage";
import { getPost } from "../../lib";

const currentDate = new Date();
const Blogs = ({ posts, page }) => {
  return (
    <div className="mx-auto">
      <BlogPage posts={posts} page={page}></BlogPage>
    </div>
  );
};
export const getServerSideProps = async ({ query: { page = 1 } }) => {
 
  const posts = getPost()

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
