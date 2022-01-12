import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import Layout from "./Layout";

const Category = ({ value }) => {
  const catagories = value.map((category) => category.frontmatter.category);
  const filterCategory = [...new Set(catagories)];

  return (
    <Layout title={filterCategory[0]}>
      <h1 className="pageTitle">
        Showing Blog From{" "}
        <span className="text-primaryColor">{filterCategory[0]}</span>
      </h1>

      <div className="container postContents">
        {value.map((blog) => (
          <React.Fragment key={blog.slug}>
            <div className="blog h-h600">
              <div className="blogImage">
                <Image
                  alt="abc"
                  src={blog.frontmatter.image}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>

              <div className="py-4 md:h-60">
                <div className="blogTitle ">
                  <h3>
                    <Link href={`/post/${blog.slug}`}>
                      <a>{blog.frontmatter.heading}</a>
                    </Link>
                  </h3>
                </div>
                <div className="postsData">
                  <p>{blog.frontmatter.content.slice(0, 200)}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default Category;
