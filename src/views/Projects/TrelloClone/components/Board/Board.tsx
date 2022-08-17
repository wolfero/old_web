import { useEffect, useState } from 'react';
import {
	Droppable,
	DragDropContext,
	resetServerContext,
	DropResult,
} from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import loadCards from '../../utils/loadCards';
import { CardType } from '../../model/CardType';
import { TaskType } from '../../model/TaskType';

import styles from './Board.module.scss';
import { GetServerSideProps } from 'next';

const Board = () => {
	const [cards, setCards] = useState<CardType[]>([]);
	const reorderCards = (
		list: CardType[],
		startIndex: number,
		endIndex: number
	) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};
	const reorderTasks = (
		list: TaskType[],
		startIndex: number,
		endIndex: number
	) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	function onDragEnd(result: DropResult) {
		if (!result.destination) {
			return;
		}

		if (result.type === 'column') {
			const cardsOrder = reorderCards(
				cards,
				result.source.index,
				result.destination.index
			);
			setCards(cardsOrder);
			return;
		}

		if (result.source.droppableId === result.destination.droppableId) {
			const card = cards.filter(
				(card) => card.id === result.source.droppableId
			);
			const tasks = reorderTasks(
				card[0].tasks,
				result.source.index,
				result.destination.index
			);
			card[0].tasks = tasks;
			return;
		}

		const sourceCard = cards.filter(
			(card) => card.id === result.source.droppableId
		);
		if (result.destination != undefined) {
			const destination = result.destination;
			const destinationCard = cards.filter(
				(card) => card.id === destination.droppableId
			);
			const movedTask = sourceCard[0].tasks.splice(
				result.source.index,
				1
			);

			cards.forEach((card) => {
				if (card.id === sourceCard[0].id) {
					card.tasks = sourceCard[0].tasks;
				} else if (card.id === destinationCard[0].id) {
					card.tasks.splice(destination.index, 0, movedTask[0]);
				}
			});
			setCards(cards);
			return;
		}
	}

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
		<>
			{isBrowser ? (
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable
						droppableId="all-droppables"
						direction="horizontal"
						type="column"
					>
						{(provided) => (
							<div
								className={styles.Board}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{cards.map((card, index) => (
									<Card
										card={card}
										key={card.id}
										index={index}
									/>
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
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	resetServerContext();
	return { props: { data: [] } };
};

export default Board;
