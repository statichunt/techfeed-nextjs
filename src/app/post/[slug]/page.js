import SeoMeta from "@/component/SeoMeta";
import FilterData from "@/components/FilterData";
import SinglePosts from "@/components/SinglePost";
import socialIcon from "@/config/config.json";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { getAllSingleBlog, getPost } from "src/lib/post";

export async function generateStaticParams() {
  const slugPost = getPost();
  const post = slugPost.filter((p) => p.frontmatter.draft != true);
  return post.map((path) => ({
    slug: path.slug,
  }));
}

export default async function SinglePostPage({ params }) {
  const { slug } = await params;
  const singleMetaDataWithFrontMatter = fs.readFileSync(
    path.join("src/content/posts", slug + ".md"),
    "utf-8",
  );
  const { data: frontmatter, content } = matter(singleMetaDataWithFrontMatter);
  const posts = getPost();
  const aboutData = getAllSingleBlog("src/content/about");
  const { socialMedia } = socialIcon;

  const filter = posts.filter(
    (data) => data.frontmatter.category == frontmatter.category,
  );
  const remainData = posts.filter((el) => !filter.includes(el));
  const filterDataById = filter.filter(
    (data) => data.frontmatter.id != frontmatter.id,
  );
  const sortBySlug = [...filterDataById, ...remainData];

  return (
    <>
      <SeoMeta title={slug.replace(/-/g, " ")} />
      <div className="flex justify-center items-center container postContents mt-16 mb-2 sm:my-16 md:my-24">
        <SinglePosts
          frontmatter={frontmatter}
          content={content}
          socialMedia={socialMedia}
          slug={slug}
          data={aboutData}
          author={frontmatter.author}
        ></SinglePosts>

        <FilterData value={sortBySlug.slice(0, 3)}></FilterData>
      </div>
    </>
  );
}
