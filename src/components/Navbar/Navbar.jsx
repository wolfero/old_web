import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavItem from "../NavItem/NavItem";
import pageLinks from "../../../data/page-links";

import styles from './Navbar.module.scss';

const Navbar = ({ themes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lightMode, darkMode] = themes;

  return (
    <>
      <Box
        bg={useColorModeValue(lightMode, darkMode)}
        px={4}>
        <Flex h={16} className={styles.menu}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {pageLinks.map(({ name, path }) => (
                <NavItem key={name} name={name} path={path} darkMode={darkMode} lightMode={lightMode}>
                  {name}
                </NavItem>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {pageLinks.map(({ name, path }) => (
                <NavItem key={name} name={name} path={path} darkMode={darkMode} lightMode={lightMode}>
                  {name}
                </NavItem>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
