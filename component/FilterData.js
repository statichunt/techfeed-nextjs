import Image from "next/image";
import Link from "next/dist/client/link";

const FilterData = ({ value }) => {
  return (
    <>
      <div className="sm:my-20 my-10 w-full">
        <div className="pageTitle text-center  tracking-tight my-5 font-normal cursor-default">
          <h1>SIMILAR POST</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-8 md:grid-cols-2 ">
          {value.map((blog) => (
            <div className="md:px-3 box-border mt-8  " key={blog.slug}>
              <div className="w-full h-52 relative">
                <Image
                  alt="abc"
                  src={blog.frontmatter.image}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>

              <div className="blogTitle text-center  hover:opacity-70">
                <h2 className="mt-9">
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
