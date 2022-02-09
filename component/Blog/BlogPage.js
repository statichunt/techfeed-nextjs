import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import config from "../../config/config.json";
import Pagination from "../Pagination";
import { marked } from "marked";

const BlogPage = ({ posts, page, blogData }) => {
  const [isBlog] = useState(true);
  const { pagination } = config.perameter;
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = Math.ceil(posts.length / pagination);
  const router = useRouter();

  useEffect(() => {
    if (page > pageNumber) {
      router.push("/blog");
    }
  });
  return (
    <>
      <h1 className="pageTitle">{blogData.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(blogData.content) }}
        className="markdown mt-12"
        //
      ></div>

      <div className="container postContents mx-auto">
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

            <div className="h-auto my-6 sm:h-60 py-4">
              <div className="blogTitle">
                <h3>
                  <Link href={`/post/${blog.slug}`}>
                    <a>{blog.frontmatter.title}</a>
                  </Link>
                </h3>
              </div>
              <div className="postsData leading-8">
                {blog.frontmatter.excerpt ? (
                  <p>{blog.frontmatter.excerpt.slice(0, 200)}</p>
                ) : (
                  <p>{blog.content.slice(0, 200).replace(/[!@#$%^&*]/g, "")}</p>
                )}
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
