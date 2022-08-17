import { useEffect, useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import loadCards from '../../utils/loadCards';

import styles from './Board.module.scss';
import { CardType } from '../../model/CardType';

type DragEndResult = {
	combine: null;
	destination: { index: number; droppableId: string };
	draggableId: string;
	mode: string;
	reason: string;
	source: {
		droppableId: string;
		index: number;
	};
	type: string;
};

// {draggableId: 'card-1', type: 'column', source: {…}, reason: 'DROP', mode: 'FLUID', …}
// combine: null
// destination: {droppableId: 'all-droppables', index: 1}
// draggableId: "card-1"
// mode: "FLUID"
// reason: "DROP"
// source: {index: 1, droppableId: 'all-droppables'}
// type: "column"
// [[Prototype]]: Object

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

	function onDragEnd(result: DragEndResult) {
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
			const card = cards.filter(card=>card.id===result.source.droppableId);
			const tasks = reorderCards(
				card,
				result.source.index,
				result.destination.index
			);

			// updating column entry
			const newState = {
				...state,
				columns: {
					...state.columns,
					[card.id]: {
						...card,
						items: tasks,
					},
				},
			};
			setState(newState);
			return;
		}

		// moving between lists
		const sourceColumn = state.columns[result.source.droppableId];
		const destinationColumn = state.columns[result.destination.droppableId];
		const item = sourceColumn.items[result.source.index];

		// 1. remove item from source column
		const newSourceColumn = {
			...sourceColumn,
			items: [...sourceColumn.items],
		};
		newSourceColumn.items.splice(result.source.index, 1);

		// 2. insert into destination column
		const newDestinationColumn = {
			...destinationColumn,
			items: [...destinationColumn.items],
		};
		// in line modification of items
		newDestinationColumn.items.splice(result.destination.index, 0, item);

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newSourceColumn.id]: newSourceColumn,
				[newDestinationColumn.id]: newDestinationColumn,
			},
		};

		setState(newState);
	}

	useEffect(() => {
		async function getLists() {
			const result = await Promise.resolve(loadCards());
			setCards(result);
		}

		getLists();
	}, []);

	return (
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
	);
};

export default Board;
