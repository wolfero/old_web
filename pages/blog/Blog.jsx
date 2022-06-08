import { useCallback, useRef, useState } from "react";
import {
    Container,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import PostList from "../../src/components/blog/PostList";
import styles from "./Blog.module.scss";

export const Blog = ({ posts }) => {
    const searchRef = useRef(null);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(posts);

    const onChange = useCallback((event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        console.log(newQuery);
        if (newQuery.length) {
            newQuery = newQuery.toLowerCase();
            const res = newQuery
                ? results.filter((post) => {
                      const frontMatter = post.frontMatter;
                      const title = frontMatter.title
                          .toLowerCase()
                          .includes(newQuery);
                      const tag = frontMatter.tags.some((tag) =>
                          tag.toLowerCase().includes(newQuery)
                      );
                      return title || tag;
                  })
                : [];
            setResults(res);
        } else {
            setResults(results);
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
            <Container ref={searchRef} maxW={"2xl"}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <MdSearch color="gray.200" />
                    </InputLeftElement>
                    <Input
                        onChange={onChange}
                        placeholder="¿Estás buscando algo?"
                        type="text"
                        value={query}
                        borderColor="red.600"
                        border={"2px"}
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
