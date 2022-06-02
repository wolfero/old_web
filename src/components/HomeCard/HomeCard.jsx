import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Link,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import PostTags from "../blog/PostTags";
import styles from './HomeCard.module.scss';

const HomeCard = () => {
  return (
    <Center py={6}>
      <Box
        className={styles.Card}>

        <Avatar
          src={'/assets/default-image.png'}
          className={styles.Image}
        />

        <Heading className={styles.Name}>
          Frantisek Klucar
        </Heading>

        <Box className={styles.Content}>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Hola soy PEPE
          </Text>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default HomeCard;