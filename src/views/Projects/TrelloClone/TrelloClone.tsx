import { Box, Heading } from '@chakra-ui/react';
import { BsBookmarkFill } from 'react-icons/bs';
import Board from './components/Board/Board';

import styles from './TrelloClone.module.scss';

export const TrelloClone = () => {
	return (
		<Box className={styles.Container}>
			<Heading textAlign={'center'} p={'2rem'}>🚧 In development</Heading>
			<Heading as={'h1'} className={styles.Navbar}>
				<BsBookmarkFill className={styles.BookMark} />
				Trello Board Clone
			</Heading>
			<Board />
		</Box>
	);
};

export default TrelloClone;
