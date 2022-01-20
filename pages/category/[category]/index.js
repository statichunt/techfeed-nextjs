import Category from "@/component/Category";

import { getPost } from "@/lib/post";

const CategoryData = ({ category, posts }) => {
  const filterByCategory = posts.filter((data) => data.category == category);

  return (
    <div>
      <Category value={filterByCategory}></Category>
    </div>
  );
};

export const getStaticPaths = async () => {
  const getPosts = getPost();
  const posts = getPosts.filter((data) => data.frontmatter.draft == false);
  const paths = posts.map((category) => ({
    params: {
      category: category.frontmatter.category.replace(/ /g, "-"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { category } = params;

  const getPosts = getPost();
  const posts = getPosts.filter((data) => data.frontmatter.draft == false);

  return {
    props: {
      category: category,
      posts: posts,
    },
  };
};

export default CategoryData;
