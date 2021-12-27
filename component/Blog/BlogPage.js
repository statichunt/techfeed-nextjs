import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Header from "next/head";
import config from "../../content/config.json";
import Pagination from "../Pagination";

const BlogPage = ({ posts, page }) => {
  const [isBlog] = useState(true);
  const { postsPerPage } = config;

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = Math.ceil(posts.length / postsPerPage);

  const router = useRouter();

  useEffect(() => {
    if (page > pageNumber) {
      router.push("/blog");
    }
  });
  return (
    <>
      <Header>
        <title>Blog</title>
      </Header>
      <h1 className="pageTitle">All Blogs</h1>
      <div className="PostContainer mx-auto">
        {currentPosts.map((blog) => (
          <div className=" blog" key={blog.slug}>
            <div className=" blogImage">
              <Image
                alt="abc"
                src={blog.frontmatter.image}
                layout="fill"
                objectFit="cover"
                fit="crop"
              ></Image>
            </div>

            <div className="h-auto my-4 sm:h-60 py-4">
              <div className="heading  text-2xl text-center  mb-4 font-thin hover:opacity-70">
                <h1>
                  <Link href={`/${blog.slug}`}>
                    <a>{blog.frontmatter.heading}</a>
                  </Link>
                </h1>
              </div>
              <div className=" font-lora text-center text-sm sm:text-xl leading-7">
                <p>{blog.frontmatter.content.slice(0, 200)}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full sm:px-16 mx-auto flex justify-between mt-10 md:mt-20 transition">
          <Pagination
            pageNumber={pageNumber}
            page={page}
            isBlog={isBlog}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
