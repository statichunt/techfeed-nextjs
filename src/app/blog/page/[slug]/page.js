import SeoMeta from "@/component/SeoMeta";
import BlogPage from "@/components/Blog/BlogPage";
import config from "@/config/config.json";
import { getIndexData, getPost } from "src/lib/post";

export async function generateStaticParams() {
  const posts = getPost();
  const { pagination } = config.site;
  let paths = [];
  const numOfPage = Math.ceil(posts.length / pagination);
  for (let i = 0; i <= numOfPage; i++) {
    paths.push({
      slug: i.toString(),
    });
  }
  return paths;
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const page = parseInt(slug || 1);
  const getPosts = getPost();
  const posts = getPosts.filter((data) => data.frontmatter.draft == false);
  const blogData = getIndexData("src/content/posts");

  return (
    <>
      <SeoMeta title="Blog" />
      <div className="mx-auto">
        <BlogPage posts={posts} page={page} blogData={blogData}></BlogPage>
      </div>
    </>
  );
}
