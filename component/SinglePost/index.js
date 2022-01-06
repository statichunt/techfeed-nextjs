import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { marked } from "marked";
import AboutAuthor from "../About/AboutAuthor";

const SinglePosts = ({
  frontmatter,
  content,
  socialMedia,
  slug,
  data,
  author,
}) => {
  const currentDate = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <>
      <div key={slug} className=" w-full mt-20">
        <div className="block">
          <Image
            alt="abc"
            src={frontmatter.image}
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col w-full sm:w-4/5 justify-center items-center mx-auto ">
          <div className="my-10">
            {/* <Link href={`/category/${frontmatter.category}`}>
              <a className="title">{frontmatter.category}</a>
            </Link> */}
            <h2 className="title cursor-default">{frontmatter.category}</h2>
          </div>
          <h1 className="heading font-oswald text-center">
            {frontmatter.heading}
          </h1>

          <div className="">
            <p
              className="  italic  font-secondary 
                                            md:text-lg text-sm font-normal text-textLight"
            >
              Posted on{" "}
              {currentDate.getFullYear() >
              new Date(frontmatter.date).getFullYear() ? (
                new Date(frontmatter.date).toLocaleDateString("en-US", options)
              ) : currentDate.getMonth() >
                new Date(frontmatter.date).getMonth() ? (
                new Date(frontmatter.date).toLocaleDateString("en-US", options)
              ) : currentDate.getDate() ==
                new Date(frontmatter.date).getDate() ? (
                <span>Today</span>
              ) : currentDate.getDate() -
                  new Date(frontmatter.date).getDate() <=
                3 ? (
                <span>
                  {currentDate.getDate() - new Date(frontmatter.date).getDate()}{" "}
                  day ago{" "}
                </span>
              ) : (
                new Date(frontmatter.date).toLocaleDateString("en-US", options)
              )}{" "}
              by{" "}
              <Link href="/about">
                <a>
                  <span className="hover">{frontmatter.author}</span>
                </a>
              </Link>
            </p>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            className="markdown mt-8"
            //
          ></div>

          <div className="my-10">
            <div className="flex justify-start">
              {socialMedia.slice(0, 3).map((i) => (
                <div key={i.class} className="">
                  <Link
                    href={`${i.shareLink}+https://lifistyle-blog.vercel.app/${slug}`}
                  >
                    <a
                      target="_blank"
                      rel="noflow"
                      className={`  socialMedia
                                  ${
                                    i.class == "facebook"
                                      ? "hover:bg-blue-600 hover:text-text-secoundary"
                                      : i.class == "twitter"
                                      ? "hover:bg-blue-400 hover:text-text-secoundary"
                                      : i.class == "pinterest"
                                      ? "hover:bg-red-800 hover:text-text-secoundary"
                                      : undefined
                                  }`}
                    >
                      <i className={`${i.icon} not-italic`}></i>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <AboutAuthor data={data} author={author}></AboutAuthor>
        </div>
      </div>
    </>
  );
};

export default SinglePosts;
