import {
  useColorModeValue,
  Tooltip,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";

import styles from './SocialButton.module.scss'

const SocialButton = ({ children, label, href }) => {
  const darkMode = 'black.333';
  const lightMode = 'white.333';

  return (
    <>
      <Tooltip
        label={label}
        closeOnClick={false}
        hasArrow
      >
        <chakra.button
          className={styles.button}
          bg={useColorModeValue(lightMode, darkMode)}
          _hover={{
            bg: useColorModeValue(darkMode, lightMode),
            color: useColorModeValue(lightMode, darkMode)
          }}
          rounded={"full"}
          w={8}
          h={8}
          as={"a"}
          href={href}
          target="_blank"
        >
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
        </chakra.button>
      </Tooltip>
    </>
  );
};

export default SocialButton;
