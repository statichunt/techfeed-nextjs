import React from "react";
import Image from "next/dist/client/image";
import NotFound from "config/404.json";
import Layout from "@/component/Layout";

function Error() {
  const { title, image } = NotFound;
  return (
    <Layout title={title}>
      <div className="PostContainer">
        <div className="relative sm:w-width500 sm:h-h400 w-60 h-40">
          <Image
            src={image}
            alt="image"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      </div>
    </Layout>
  );
}

export default Error;
