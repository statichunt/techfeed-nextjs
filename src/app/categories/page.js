import SeoMeta from "@/component/SeoMeta";
import Link from "next/link";
import { getPost } from "src/lib/post";

export default async function Categories() {
  const posts = getPost();
  const catagories = posts.map((category) => category.frontmatter.category);
  const filterCategory = [...new Set(catagories)];

  return (
    <>
      <SeoMeta title="Category" />
      <h1 className="pageTitle mt-16 md:mt-24">All Categories </h1>
      <div className="categoryContainer postContents mb-16 md:mb-24">
        {filterCategory.map((data) => (
          <Link
            key={data}
            href={`/category/${data.replace(/ /g, "-")}`}
            className="capitalize "
          >
            <div className="categoryTitle">{data}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
