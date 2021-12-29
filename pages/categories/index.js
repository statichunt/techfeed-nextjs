import React from "react";

import Link from "next/dist/client/link";
import Header from "next/head"
import { getPost } from "../../lib";

const Categories = ({ posts }) => {
  const catagories = posts.map((category) => category.frontmatter.category);
  const filterCategory = [...new Set(catagories)];

  return (
    <div>
      <h1 className="pageTitle">All Categories </h1>
      <Header>
        <title>Category</title>
      </Header>
      <div className="categoryContainer  ">
        {filterCategory.map((data) => (
          <Link key={data} href={`/category/${data.replace(/ /g, "-")}`}>
            <a className="capitalize ">
              <div className="categoryTitle">{data}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
 

  const posts = getPost()

  return {
    props: {
      posts,
    },
  };
}
export default Categories;
