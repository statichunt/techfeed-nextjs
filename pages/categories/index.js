import React from "react";
import Link from "next/dist/client/link";
import Layout from "@/component/Layout";
import { getPost } from "@/lib/post";

const Categories = ({ posts }) => {
  const catagories = posts.map((category) => category.frontmatter.category);
  const filterCategory = [...new Set(catagories)];

  return (
    <Layout title="Category">
      <h1 className="pageTitle">All Categories </h1>

      <div className="categoryContainer postContents ">
        {filterCategory.map((data) => (
          <Link key={data} href={`/category/${data.replace(/ /g, "-")}`}>
            <a className="capitalize ">
              <div className="categoryTitle">{data}</div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getPost();

  return {
    props: {
      posts,
    },
  };
}
export default Categories;
