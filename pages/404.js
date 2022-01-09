import React from "react";
import Image from "next/dist/client/image";
import NotFound from "config/404.json";
import Layout from "@/component/Layout";

function Error() {
  const { title, image } = NotFound;
  return (
    <Layout title={title}>
      <div className="container text-center font-primary mx-auto">
        <div className="py-32">
          <h1 className="text-h1">404</h1>
          <h4 className="text-h4 ">Page Not Found</h4>
        </div>
      </div>
    </Layout>
  );
}

export default Error;
