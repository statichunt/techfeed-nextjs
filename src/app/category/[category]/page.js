import Category from "@/components/Category";
import { getPost } from "src/lib/post";

export async function generateStaticParams() {
  const getPosts = getPost();
  const posts = getPosts.filter((data) => data.frontmatter.draft == false);
  return posts.map((category) => ({
    category: category.frontmatter.category.replace(/ /g, "-"),
  }));
}

export default async function CategoryData({ params }) {
  const { category } = await params;
  const getPosts = getPost();
  const posts = getPosts.filter((data) => data.frontmatter.draft == false);
  const filterByCategory = posts.filter((data) => data.category == category);

  return (
    <div>
      <Category value={filterByCategory}></Category>
    </div>
  );
}
