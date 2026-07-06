import SeoMeta from "@/component/SeoMeta";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { getDefaultPage } from "src/lib/post";

export async function generateStaticParams() {
  const posts = getDefaultPage();
  const postsWithDraft = posts.filter((d) => d.frontmatter.draft != true);
  return postsWithDraft.map((d) => ({
    slug: d.slug,
  }));
}

export default async function RegularPage({ params }) {
  const { slug } = await params;
  const post = getDefaultPage();
  const filterPost = post.filter((data) => data.slug === slug);

  if (filterPost.length === 0) {
    notFound();
  }

  const { frontmatter, content } = filterPost[0];

  return (
    <>
      <SeoMeta title={slug} />
      <div className="container px-4 sm:px-10 font-secondary mx-auto mb-16 md:mb-24">
        <h1 className="pageTitle font-primary mt-16 md:mt-24">
          {frontmatter.title}
        </h1>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        ></div>
      </div>
    </>
  );
}
