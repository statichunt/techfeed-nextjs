import React from "react";
import Image from "next//image";

const Author = ({ data }) => {
  return (
    <div className="mt-24 container postContents">
      <div className="flex justify-center  items-center flex-col mx-auto lg:max-w-full">
        <div className="bannerContent">
          <Image
            className="welcomeImage"
            alt=""
            src={data.frontmatter.image}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="heading sm:text-h3 font-medium leading-5 my-12 ">
          <h3>{data.frontmatter.greetings}</h3>
        </div>
        <div className="authorDetails text-textColor">
          <p className="">{data.frontmatter.about}</p>
        </div>
      </div>
    </div>
  );
};
export default Author;
