import React from "react";
import Image from "next//image";

const Author = ({ data }) => {
  return (
    <div className=" mt-28  container postContents">
      <div className=" mb-6 flex justify-center items-center flex-col mx-auto lg:max-w-full">
        <div className="bannerContent">
          <Image
            className="welcomeImage"
            alt=""
            src={data.frontmatter.image}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>

        <div className="pageTitle  font-medium leading-5 mt-12 mb-6 ">
          <h3 className="text-3xl">{data.frontmatter.greetings}</h3>
        </div>
        <div className="authorDetails text-textColor">
          <p className="text-xl leading-9">{data.frontmatter.about}</p>
        </div>
      </div>
    </div>
  );
};
export default Author;
