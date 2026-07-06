import SeoMeta from "@/component/SeoMeta";
import Author from "@/components/About/Author";
import Post from "@/components/Post";
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

export default async function Posts({ params }) {
  const { slug } = await params;
  const page = parseInt(slug || 1);
  const { site } = config;
  const getPosts = getPost();
  const posts = getPosts
    .filter((p) => p.frontmatter.draft != true)
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
    );
  const data = getIndexData("src/content");

  return (
    <>
      <SeoMeta title={site.title} icon={site.favicon} />
      <Author data={data}></Author>
      <Post value={posts} page={page}></Post>
    </>
  );
}
