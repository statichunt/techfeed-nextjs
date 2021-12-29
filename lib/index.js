import fs from "fs";
import path from "path";
import matter from "gray-matter";


export const getPost=()=>{
  
    const directoryPath = path.join(process.cwd(), "posts");
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

    return posts
}

export const getAboutData =()=>{
  const aboutFile = fs.readdirSync(path.join("About"));
  const metaDataWithFrontMatter = fs.readFileSync(
    path.join("About", aboutFile[0]),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(metaDataWithFrontMatter);

  return {
    frontmatter,
    content,
  } 
}

export const getPrivacyPage =()=>{
    const PrivacyPage = fs.readdirSync(path.join("Privacy-Page"));
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("Privacy-Page", PrivacyPage [0]),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
  
    return {
      frontmatter,
      content,
    } 
  }

  export const getTermCondition=()=>{
    const TermsPage = fs.readdirSync(path.join("Terms-Page"));
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("Terms-Page", TermsPage [0]),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
  
    return {
      frontmatter,
      content,
    }  
  }