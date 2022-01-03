import Category from "@/component/Category";

import { getPost } from "@/lib/post";

function CategoryData({ category, posts }) {
  const filterByCategory = posts.filter((data) => data.category == category);

  return (
    <div>
      <Category value={filterByCategory}></Category>
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = getPost();
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

  const posts = getPost();
  return {
    props: {
      category,
      posts,
    },
  };
};

export default CategoryData;
