import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPost = () => {
  const directoryPath = path.join("content/posts");
  const pageSlugs = fs.readdirSync(directoryPath);
  const pages = pageSlugs.filter((page) => page.match(/^[a-z]/));
  const posts = pages.map((filename) => {
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
  const currentDate = new Date();
  const filterByDate = posts.filter(
    (post) => new Date(post.frontmatter.date) <= currentDate
  );

  return filterByDate;
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

export const getIndexData = (type) => {
  const indexData = fs.readdirSync(path.join(type));
  const index = indexData.filter((page) => page.match(/^_/));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join(type, index[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  };
};

export const getAllSingleBlog = (type) => {
  const singleFile = fs.readdirSync(path.join(type));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join(type, singleFile[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  };
};
