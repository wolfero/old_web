import { useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import sample from '../../../../../../data/sample';
import { db } from '../../../../../../data/firebase';
import List from '../List/List';
import AddButton from '../AddButton/AddButton';

import styles from './Board.module.scss';

const Board = () => {
	const [lists, setLists] = useState(sample.lists);//TODO LOAD LIST FROM FIREBASE

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
