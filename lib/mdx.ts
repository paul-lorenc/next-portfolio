import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

const projectDirectory = path.join(process.cwd(), "data/projects");

export const getSortedPosts = () => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(projectDirectory);

  const allProjectData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(projectDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      ...frontmatter,
    };
  });
  return allProjectData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllProjectSlugs = () => {
  const fileNames = fs.readdirSync(projectDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

export const getProjectBySlug = async (slug: string) => {
  const fullPath = path.join(projectDirectory, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
