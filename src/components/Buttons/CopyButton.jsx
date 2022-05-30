import {
  useColorModeValue,
  useClipboard,
  Tooltip,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";
import styles from './Buttons.module.scss'

const CopyButton = ({ children, label, href, themes }) => {
  const { hasCopied, onCopy } = useClipboard(href);
  const [lightMode, darkMode] = themes;


  return (
    <>
      <Tooltip
        label={hasCopied ? "Email Copiado!" : "Copiar Email"}
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
          onClick={onCopy}
        >
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
        </chakra.button>
      </Tooltip>
    </>
  );
};

export default CopyButton;
