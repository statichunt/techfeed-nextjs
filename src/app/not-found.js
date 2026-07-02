import SeoMeta from "@/component/SeoMeta";
import { marked } from "marked";
import { getAllSingleBlog } from "src/lib/post";

export default async function NotFound() {
  const notFoundData = getAllSingleBlog("src/content/404");

  return (
    <>
      <SeoMeta title={notFoundData.frontmatter.title} />
      <div className="container text-center font-primary mx-auto">
        <div className="py-32">
          <h1 className="text-h1">{notFoundData.frontmatter.title}</h1>
          <h4 className="text-h4 ">{notFoundData.frontmatter.subtitle}</h4>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(notFoundData.content),
          }}
          className="markdown mt-8"
        ></div>
      </div>
    </>
  );
}
