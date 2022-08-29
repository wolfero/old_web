import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

import CardTitle from '../CardTitle/CardTitle';
import CardContent from '../CardContent/CardContent';
import AddButton from '../AddButton/AddButton';
import { CardType } from '../../model/CardType';

import styles from './Card.module.scss';

type CardListProps = {
	card: CardType;
	index: number;
};

const Card = ({ card, index }: CardListProps) => {
	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided) => (
				<Box
					className={styles.Card}
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<CardTitle cardId={card.id} title={card.title} provided={provided} />
					<CardContent card={card} index={index} />
					<AddButton cardId={card.id} type={'task'} />
				</Box>
			)}
		</Draggable>
	);
};

export default Card;
