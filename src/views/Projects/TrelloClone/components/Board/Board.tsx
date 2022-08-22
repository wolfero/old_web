import NoSSR from 'react-no-ssr';
import { Box } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { doc, onSnapshot, orderBy, query, updateDoc, collection } from 'firebase/firestore';
import { Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';

import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import { CardType } from '../../model/CardType';
import { db } from '../../../../../../data/firebase';
import { addMoreCard, removeCard, updateCardTitle } from '../../utils/cardManagement';
import { addMoreTask, removeTask, updateTaskTitle } from '../../utils/taskManagement';

import styles from './Board.module.scss';
import { title } from 'process';

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
	const loadCards = () => {
		const result = query(collection(db, 'cards'), orderBy('timestamp', 'asc'));
		onSnapshot(result, (snapshot) => {
			setCards(
				snapshot.docs.map((doc): CardType => {
					const { title, type, tasks, timestamp } = doc.data();
					return {
						id: doc.id,
						title,
						type,
						tasks,
						timestamp,
					};
				})
			);
		});
	};

	useEffect(() => {
		loadCards();
	}, []);

	const onDragEnd = async (result: DropResult) => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		if (type === 'card') {
			const destinationRef = doc(db, 'cards', cards[destination.index].id);
			const sourceRef = doc(db, 'cards', cards[source.index].id);
			await updateDoc(destinationRef, {
				timestamp: cards[source.index].timestamp,
			});
			await updateDoc(sourceRef, {
				timestamp: cards[destination.index].timestamp,
			});
			
			//TODO AVERIGUAR PORQUE NO ACTUALIZA TITULO DEL CARD AL MOVERLOS

		} else if (source.droppableId === destination.droppableId) {
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

			const cardsRef = doc(db, 'cards', destination.droppableId);
			await updateDoc(cardsRef, { tasks: updatedTasks });
			return;
		} else {
			const sourceCard = cards.filter((card) => card.id === source.droppableId)[0];
			const destinationCard = cards.filter((card) => card.id === destination.droppableId)[0];
			const draggingTask = sourceCard.tasks.filter((task) => task.id === draggableId)[0];

			const sourceCardRef = doc(db, 'cards', source.droppableId);
			sourceCard?.tasks.splice(source.index, 1);
			await updateDoc(sourceCardRef, { tasks: sourceCard?.tasks });

			const destinationCardRef = doc(db, 'cards', destination.droppableId);
			destinationCard?.tasks.splice(destination.index, 0, draggingTask);
			await updateDoc(destinationCardRef, { tasks: destinationCard.tasks });
			return;
		}
	};

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
									<Card card={card} key={index} index={index} />
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
