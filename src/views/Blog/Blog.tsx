import { useCallback, useRef, useState } from "react";
import {
    Container,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import PostList from "../../components/blog/PostList/PostList";
import { PostsProps, PostsType } from "../../model/Blog/posts";

export const Blog = ({ posts }: PostsProps) => {
    const searchRef = useRef(null);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(posts);

    const onChange = useCallback((posts: PostsType, event) => {
        const toSearch: string = event.target.value;
        setQuery(toSearch.toLowerCase());
        if (toSearch.length) {
            const res = toSearch
                ? posts.filter((post) => {
                      const frontMatter = post.frontMatter;
                      const title = frontMatter.title
                          .toLowerCase()
                          .includes(toSearch);
                      const tag = frontMatter.tags.some((tag) =>
                          tag.toLowerCase().includes(toSearch)
                      );
                      return title || tag;
                  })
                : [];
            setResults(res);
        } else {
            setResults(posts);
        }
    }, []);

    return (
        <Container maxW={"7xl"} px={"20"} py={"5"}>
            <Container ref={searchRef} maxW={"2xl"}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <MdSearch />
                    </InputLeftElement>
                    <Input
                        onChange={(e) => onChange(posts, e)}
                        placeholder="¿Estás buscando algo?"
                        type="text"
                        value={query}
                    />
                </InputGroup>
            </Container>
            {results && <PostList posts={results}></PostList>}
        </Container>
    );
};

export default Blog;
