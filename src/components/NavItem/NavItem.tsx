import { Link, useColorModeValue } from "@chakra-ui/react";

import styles from "./NavItem.module.scss";

interface NavItemProps {
    key:string;
    name: string;
    path: string;
    darkMode: string;
    lightMode: string;
}

const NavItem = ({ name, path, darkMode, lightMode }: NavItemProps) => (
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
