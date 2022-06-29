import { Post } from "./post";

export type PostsType = Post[];

export interface PostsProps {
    posts: PostsType;
}
