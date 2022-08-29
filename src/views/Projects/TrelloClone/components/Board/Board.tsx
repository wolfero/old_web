import NoSSR from 'react-no-ssr';
import { Box } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';

import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import { CardType } from '../../model/CardType';
import {
	addMoreCard,
	loadCards,
	removeCard,
	updateCardPosition,
	updateCardTitle,
} from '../../utils/cardManagement';
import {
	addMoreTask,
	removeTask,
	updatedTasksPositionOnCard,
	updateTaskPositionOnDifferentCard,
	updateTaskTitle,
} from '../../utils/taskManagement';

import styles from './Board.module.scss';

export const StoreApi = createContext({
	addMoreCard,
	removeCard,
	updateCardTitle,
	addMoreTask,
	removeTask,
	updateTaskTitle,
});

const Board = () => {
	const [cards, setCards] = useState<CardType[]>([]);
	const onDragEnd = async (result: DropResult) => {
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}

		if (type === 'card') {
			updateCardPosition(cards, destination, source);
		} else if (source.droppableId === destination.droppableId) {
			updatedTasksPositionOnCard(cards, destination, source);
		} else {
			updateTaskPositionOnDifferentCard(cards, result);
		}
	};

	useEffect(() => {
		loadCards(setCards);
	}, []);

	return (
		<StoreApi.Provider
			value={{
				addMoreCard,
				addMoreTask,
				updateCardTitle,
				updateTaskTitle,
				removeCard,
				removeTask,
			}}
		>
			<NoSSR>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="all-droppables" direction="horizontal" type="card">
						{(provided) => (
							<div
								className={styles.Board}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{cards.map((card, index) => (
									<Card card={card} key={card.id} index={index} />
								))}
								<Box className={styles.Card}>
									<AddButton type="card" />
								</Box>
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</NoSSR>
		</StoreApi.Provider>
	);
};

export default Board;
