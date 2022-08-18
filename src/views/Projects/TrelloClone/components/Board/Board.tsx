import { createContext, useEffect, useState } from 'react';
import { Droppable, DragDropContext, resetServerContext, DropResult } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { doc, updateDoc } from 'firebase/firestore';

import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import loadCards from '../../utils/loadCards';
import { CardType } from '../../model/CardType';
import { TaskType } from '../../model/TaskType';
import { db, timestamp } from '../../../../../../data/firebase';
import { addMoreCard, removeCard, updateCardTitle } from '../../utils/cardManagement';
import { addMoreTask, removeTask, updateTaskTitle } from '../../utils/taskManagement';

import styles from './Board.module.scss';

const StoreApi = createContext(null);

const Board = () => {
	const [cards, setCards] = useState<CardType[]>([]);
	const reorderCards = (list: CardType[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};
	const reorderTasks = (list: TaskType[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};
	const onDragEnd = async (result: DropResult) => {
		const { destination, source, draggableId, type } = result;

		if (destination === undefined) {
			return;
		}

		if (type === 'column') {
			//TODO CONECTE TO FIREBASE
			// const destinationRef = doc(db, 'cards', cards[destination.index].id);
			// const sourceRef = doc(db, 'cards', cards[source.index].id);

			// await updateDoc(destinationRef, { timestamp: timestamp });
			// await updateDoc(sourceRef, { timestamp: timestamp });

			const cardsOrder = reorderCards(
				cards,
				source.index,
				destination.index
			);
			setCards(cardsOrder);
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const card = cards.filter((card) => card.id === source.droppableId)[0];

			const updatedTasks = card.tasks.map((task, index) => {
				if (index === source.index) {
					return card.tasks[destination.index];
				}
				if (index === destination.index) {
					return card.tasks[source.index];
				}
				return task;
			});
			//TODO CONECTE TO FIREBASE
			// const cardsRef = doc(db, 'cards', destination.droppableId);
			// await updateDoc(cardsRef, { tasks: updatedTasks });

			const tasks = reorderTasks(
				card.tasks,
				source.index,
				destination.index
			);
			card.tasks = tasks;
			return;
		} 
		//TODO CONECTE TO FIREBASE
		// else {
		// 	const sourceCard = cards.filter((card) => card.id === source.droppableId)[0];
		// 	const destinationCard = cards.filter((card) => card.id === destination.droppableId)[0];
		// 	const draggingTask = sourceCard.tasks.filter((task) => task.id === draggableId)[0];

		// 	const sourceCardRef = doc(db, 'cards', source.droppableId);
		// 	sourceCard?.tasks.splice(source.index, 1);
		// 	await updateDoc(sourceCardRef, {
		// 		tasks: sourceCard?.tasks,
		// 	});

		// 	const destinationCardRef = doc(db, 'cards', destination.droppableId);
		// 	destinationCard?.tasks.splice(destination.index, 0, draggingTask);
		// 	await updateDoc(destinationCardRef, { tasks: destinationCard.tasks });
		// }

		const sourceCard = cards.filter((card) => card.id === source.droppableId);
		const destinationCard = cards.filter((card) => card.id === destination.droppableId);
		const movedTask = sourceCard[0].tasks.splice(source.index, 1);

		cards.forEach((card) => {
			if (card.id === sourceCard[0].id) {
				card.tasks = sourceCard[0].tasks;
			} else if (card.id === destinationCard[0].id) {
				card.tasks.splice(destination.index, 0, movedTask[0]);
			}
		});
		setCards(cards);
		return;
	};

	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		async function getLists() {
			const result = await Promise.resolve(loadCards());
			setCards(result);
		}

		getLists();
		setIsBrowser(process.browser);
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
			{isBrowser ? (
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="all-droppables" direction="horizontal" type="column">
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
									<AddButton type="list" />
								</Box>
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			) : null}
		</StoreApi.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	resetServerContext();
	return { props: { data: [] } };
};

export default Board;
