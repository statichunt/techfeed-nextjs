import { marked } from "marked";
import React from "react";
import Layout from "../../component/Layout";
import { getTermCondition } from "../../lib";

const TermsCondition = ({ posts }) => {
  return (
    <Layout title="Terms and Conditions">
      <div className="PostContainer">
        <h2 className="heading text-center my-8 leading-normal">
          {posts.frontmatter.title}
        </h2>

        <div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: marked.parse(posts.content) }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const postsdata = getTermCondition();

  return {
    props: {
      posts: postsdata,
    },
  };
}
export default TermsCondition;
