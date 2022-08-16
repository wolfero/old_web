import { useEffect, useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

import List from '../List/List';
import AddButton from '../AddButton/AddButton';
import loadLists from '../../utils/loadLists';

import styles from './Board.module.scss';
import { ListProps } from '../../model/ListProps';

const Board = () => {
	const [lists, setLists] = useState<ListProps[]>([]);

	useEffect(() => {
		async function getLists() {
			const result = await Promise.resolve(loadLists());
			setLists(result);
		}

		getLists();
	}, []);

	return (
		<DragDropContext>
			<Droppable droppableId="app" type="list" direction="horizontal">
				{(provided) => (
					<div className={styles.Board} ref={provided.innerRef}>
						{lists.map((list, index) => (
							<List list={list} key={list.id} index={index} />
						))}
						<Box className={styles.Card}>
							<AddButton type="list" />
						</Box>
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Board;
