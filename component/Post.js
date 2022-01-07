import { useRouter } from "next/router";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/dist/client/link";
import { useEffect } from "react";
import config from "../config/config.json";
import Pagination from "./Pagination";
const Post = ({ value, page }) => {
  const { socialMedia } = config;
  const { postsPerPage } = config.perameter;
  let options = { year: "numeric", month: "long", day: "numeric" };

  const currentDate = new Date();

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = value.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = Math.ceil(value.length / postsPerPage);
  const router = useRouter();

  const y = currentPosts.map((d) =>
    new Date(d.frontmatter.date).toLocaleDateString("en-US", options)
  );

  useEffect(() => {
    if (page > pageNumber) {
      router.push("/");
    }
  });

  return (
    <>
      <div className="container postContents">
        {currentPosts.map((data) => (
          <div key={data.slug} className="w-full my-10 block">
            <div className="block">
              <Image
                alt="abc"
                src={data.frontmatter.image}
                width={1200}
                height={700}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
            <div className=" lg:w-4/6 leading-8 w-full mx-auto">
              <div className="text-center my-14">
                <div className="mb-1.5">
                  <Link href={`/category/${data.category}`}>
                    <a className="title">{data.frontmatter.category}</a>
                  </Link>
                </div>
                <h1 className="heading transition hover:opacity-70 my-8 leading-normal ">
                  <Link href={`/post/${data.slug}`}>
                    <a>{data.frontmatter.heading}</a>
                  </Link>
                </h1>

                <div className="">
                  <p
                    className="  italic  font-secondary 
                                            md:text-lg text-sm font-normal text-textLight"
                  >
                    Posted on{" "}
                    {currentDate.getFullYear() >
                    new Date(data.frontmatter.date).getFullYear() ? (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options
                      )
                    ) : currentDate.getMonth() >
                      new Date(data.frontmatter.date).getMonth() ? (
                      new Date(data.frontmatter.date).toLocaleDateString(
                        "en-US",
                        options
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
                        options
                      )
                    )}{" "}
                    by{" "}
                    <Link href="/about">
                      <a>
                        <span className="hover">{data.frontmatter.author}</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="postsData">
                <p>{data.frontmatter.content}</p>
              </div>

              <div className="my-10">
                <div className="hover  flex-order my-10">
                  <Link href={`/post/${data.slug}`}>
                    <a className="flex-order text-xl  capitalize">
                      continue reading
                      <span className="mx-1">
                        <BsArrowRight />
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-center">
                  {socialMedia.slice(0, 3).map((i) => (
                    <div key={i.shareLink} className="">
                      <Link
                        href={`${i.shareLink}+https://lifistyle-blog.vercel.app/${data.slug}`}
                      >
                        <a
                          target="_blank"
                          rel="noflow"
                          className={`
                                          socialMedia
                                           cursor-pointer
                                           ${i.class}
                                           `}
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
        ))}

        {/* pagination  */}
        <div className="w-full lg:w-4/6 mx-auto flex justify-between">
          <Pagination pageNumber={pageNumber} page={page}></Pagination>
        </div>
      </div>
    </>
  );
};
export default Post;
