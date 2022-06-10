import { useCallback, useRef, useState } from "react";
import {
    Container,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import { getAllFiles } from "../../lib/mdx";
import PostList from "../../src/components/blog/PostList";

export const Blog = ({ posts }) => {
    const searchRef = useRef(null);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(posts);

    const onChange = useCallback((posts, event) => {
        const query = event.target.value;
        setQuery(query);
        if (query.length) {
            query = query.toLowerCase();
            const res = query
                ? posts.filter((post) => {
                      const frontMatter = post.frontMatter;
                      const title = frontMatter.title
                          .toLowerCase()
                          .includes(query);
                      const tag = frontMatter.tags.some((tag) =>
                          tag.toLowerCase().includes(query)
                      );
                      return title || tag;
                  })
                : [];
            setResults(res);
        } else {
            setResults(posts);
        }
    }, []);

    const onClick = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false);
            window.removeEventListener("click", onClick);
        }
    }, []);

    return (
        <>
            <Container
                ref={searchRef}
                maxW={"2xl"}
            >
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
            {results.length > 0 && (
                <Container maxW={"7xl"} p="12">
                    {results && <PostList posts={results}></PostList>}
                </Container>
            )}
        </>
    );
};

export default Blog;
export async function getStaticProps() {
    const posts = await getAllFiles();
    return {
        props: {
            posts,
        },
    };
}