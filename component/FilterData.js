/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/dist/client/link";
import { myLoader } from "@/lib/utils/loader";

const FilterData = ({ value }) => {
  return (
    <>
      <div className="w-full">
        <div className="pageTitle text-center tracking-tight font-normal cursor-default">
          <h1>SIMILAR POST</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-8 md:grid-cols-2 ">
          {value.map((blog) => (
            <div className="md:px-3 box-border mb-10 md:mb-0" key={blog.slug}>
              <div className="w-full h-52 relative">
                <Link href={`/post/${blog.slug}`}>
                  <a>
                    {" "}
                    <Image
                      alt="abc"
                      src={blog.frontmatter.image}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                    {/* <img alt="abc" src={blog.frontmatter.image} /> */}
                  </a>
                </Link>
              </div>

              <div className="blogTitle text-center  hover:opacity-70">
                <h2 className="mt-8">
                  <Link href={`/post/${blog.slug}`}>
                    <a>{blog.frontmatter.title}</a>
                  </Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilterData;
