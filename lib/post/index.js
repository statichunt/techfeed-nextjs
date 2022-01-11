import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPost = () => {
  const directoryPath = path.join("content/posts");
  const pageSlugs = fs.readdirSync(directoryPath);
  const posts = pageSlugs.map((filename) => {
    const slugWspace = filename.replace(".md", "");
    const slug = slugWspace.replace(/ /g, "-");

    const fullPath = path.join(directoryPath, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    const category = frontmatter.category.replace(/ /g, "-");

    return {
      slug,
      content,
      frontmatter,
      category,
    };
  });

  return posts;
};

export const getAboutData = () => {
  const aboutFile = fs.readdirSync(path.join("content/about"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("content/about", aboutFile[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  };
};

export const getDefaultPage = () => {
  const DefaultFile = fs.readdirSync(path.join("content"));
  const markDownFile = DefaultFile.filter((d) => d.includes(".md"));
  const pageData = markDownFile.filter((d) => d.match(/^[a-z]/));

  const defaultPAge = pageData.map((filename) => {
    const slugWspace = filename.replace(".md", "");
    const slug = slugWspace.replace(/ /g, "-").toString();
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
    return {
      frontmatter,
      content,
      slug,
    };
  });

  return defaultPAge;
};

export const getContactData = () => {
  const contactFile = fs.readdirSync(path.join("content/contact"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("content/contact", contactFile[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  };
};

export const getBannerData = () => {
  const DefaultFile = fs.readdirSync(path.join("content"));
  const bannerContent = DefaultFile.filter((d) => d.match(/^_/));

  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("content", bannerContent[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
  return {
    frontmatter,
    content,
  };
};

export const get404Page = () => {
  const notFoundData = fs.readdirSync(path.join("content/404-page"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("content/404-page", notFoundData[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  };
};
export const getBlogData = () => {
  const blogData = fs.readdirSync(path.join("content/blog"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("content/blog", blogData[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  };
};
