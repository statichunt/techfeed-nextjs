import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { marked } from "marked";

const SinglePosts = ({ frontmatter, content, socialMedia, slug }) => {
  const currentDate = new Date();
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

          <div className=" my-4">
            <p className="italic font-secondary text-lg font-normal text-nameColor">
              Posted on{" "}
              {currentDate.getFullYear() >
              new Date(frontmatter.date).getFullYear() ? (
                frontmatter.date
              ) : currentDate.getMonth() >
                new Date(frontmatter.date).getMonth() ? (
                frontmatter.date
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
                frontmatter.date
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
            className="font-secondary text-xl content"
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
        </div>
      </div>
    </>
  );
};

export default SinglePosts;
