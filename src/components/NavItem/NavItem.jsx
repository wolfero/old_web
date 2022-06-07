import { Link, useColorModeValue } from "@chakra-ui/react";

import styles from "./NavItem.module.scss";

const NavItem = ({ name, path, darkMode, lightMode }) => (
    <Link
        className={styles.button}
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            bg: useColorModeValue(darkMode, lightMode),
            color: useColorModeValue(lightMode, darkMode),
        }}
        href={path}
    >
        {name}
    </Link>
);

export default NavItem;
