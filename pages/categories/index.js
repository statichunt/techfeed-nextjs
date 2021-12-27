import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/dist/client/link";
import Header from "next/head";
import { useRouter } from "next/router";

const Categories = ({ posts }) => {
  const catagories = posts.map((category) => category.frontmatter.category);
  // const filtered = posts.filter(({category}, index) => !ids.includes(category.frontmatter.category, index + 1))
  const filterCategory = [...new Set(catagories)];
  // const category=filterCategory.map(ctg=>ctg.replace(/ /g,"-"))

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
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
    return {
      slug,
      content,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
export default Categories;
