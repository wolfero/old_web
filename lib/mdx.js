import { serialize } from "next-mdx-remote/serialize";
import { getNode, getAllNodes } from "next-mdx/server";
import readingTime from "reading-time";

export const getFileBySlug = async (slug) => {
  const post = await getNode('posts', slug);
  post.frontMatter['readingTime'] = readingTime(post.content);

  post['serialize'] = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [require("mdx-prism")],
    }
  });

  return post;
};

export const getAllFiles = async () => {
  const posts = await getAllNodes('posts');
  posts.map((post) => (post.frontMatter['readingTime'] = readingTime(post.content)));
  return posts;
};
