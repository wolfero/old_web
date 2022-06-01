import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Switch
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavItem from "../NavItem/NavItem";
import pageLinks from "../../../data/page-links";

import styles from './Navbar.module.scss';

const Navbar = ({ themes }) => {
  const { colorMode, toggleColorMode } = useColorMode()
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
          <HStack spacing={8}>
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
          <Switch className={styles.pepe}
            colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha '} onChange={toggleColorMode} />
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
