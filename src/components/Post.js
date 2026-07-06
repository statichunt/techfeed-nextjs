"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import config from "../config/config.json";
import Pagination from "./Pagination";

const Post = ({ value, page }) => {
  const { socialMedia } = config;
  const { pagination } = config.site;
  let options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date();
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = value.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = Math.ceil(value.length / pagination);
  const router = useRouter();

  useEffect(() => {
    if (page > pageNumber) {
      router.push("/");
    }
  }, [page, pageNumber, router]);

  return (
    <>
      <div className="container postContents">
        {currentPosts.map((data) => (
          <div key={data.slug} className="w-full mb-16 sm:mb-24 block">
            <div className="block mb-10">
              <Image
                className="object-cover w-full"
                alt="abc"
                src={data.frontmatter.image}
                width={1200}
                height={700}
              />
            </div>
            <div className="w-full mx-auto lg:w-4/6">
              <div className="text-center mb-4">
                <div className="mb-1.5">
                  <Link
                    href={`/category/${data.category}`}
                    className="title hover:text-primary transition-all "
                  >
                    {data.frontmatter.category}
                  </Link>
                </div>
                <h2 className="heading mt-7 mb-6">
                  <Link
                    href={`/post/${data.slug}`}
                    className=" transition hover:opacity-70"
                  >
                    {data.frontmatter.title}
                  </Link>
                </h2>
                <div className="">
                  <p className=" italic font-secondary md:text-lg text-sm font-normal text-gray-400">
                    Posted on{" "}
                    {currentDate.getFullYear() >
                    new Date(data.frontmatter.date).getFullYear() ? (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options,
                      )
                    ) : currentDate.getMonth() >
                      new Date(data.frontmatter.date).getMonth() ? (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options,
                      )
                    ) : currentDate.getDate() ==
                      new Date(data.frontmatter.date).getDate() ? (
                      <span>Today</span>
                    ) : currentDate.getDate() -
                        new Date(data.frontmatter.date).getDate() <=
                      3 ? (
                      <span>
                        {currentDate.getDate() -
                          new Date(data.frontmatter.date).getDate()}{" "}
                        day ago{" "}
                      </span>
                    ) : (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options,
                      )
                    )}{" "}
                    - by{" "}
                    <Link href="/about" className=" hover text-inherit">
                      {data.frontmatter.author}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="postsData text-center">
                {data.frontmatter.excerpt ? (
                  <p>{data.frontmatter.excerpt}</p>
                ) : (
                  <p>{data.content.slice(0, 300).replace(/[!@#$%^&*]/g, "")}</p>
                )}
              </div>
              <div className="">
                <div className="hover flex justify-center items-center mb-8">
                  <Link
                    className="flex justify-center items-center sm:text-large text-base capitalize "
                    href={`/post/${data.slug}`}
                  >
                    continue reading
                    <span className="mx-1">
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  {socialMedia.slice(0, 3).map((i) => (
                    <div key={i.name} className="">
                      <Link
                        target="_blank"
                        rel="noflow"
                        className={`transition duration-300 ease-in-out socialMedia cursor-pointer ${i.name}`}
                        href={
                          i.name == "facebook"
                            ? `https://www.facebook.com/sharer/sharer.php?u=+https://lifistyle-blog.vercel.app/${data.slug}`
                            : i.name == "twitter"
                              ? `https://twitter.com/intent/tweet/?text=${data.frontmatter.title}&url=${data.slug}`
                              : i.name == "pinterest"
                                ? `https://www.pinterest.com/pin/?text=${data.frontmatter.title}&url=${data.slug}`
                                : "#"
                        }
                      >
                        <i className={`${i.icon} not-italic`}></i>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* pagination  */}
        <div className="w-full mx-auto flex items-center justify-between mb-16 sm:mb-24">
          <Pagination pageNumber={pageNumber} page={page}></Pagination>
        </div>
      </div>
    </>
  );
};
export default Post;
