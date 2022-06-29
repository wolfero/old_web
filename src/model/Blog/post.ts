import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { FrontMatter } from "./FrontMatter";

export type Post = {
    content: string;
    filepath: string;
    frontMatter: FrontMatter;
    hash: string;
    mdx: Mdx;
    slug: string;
    url: string;
    serialize: MDXRemoteSerializeResult<Record<string, unknown>>
}

type Mdx = {
    compiledSource: string;
    renderedOutput: string;
}

export interface PostProps {
    post: Post;
}

