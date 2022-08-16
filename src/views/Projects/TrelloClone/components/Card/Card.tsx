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
		<Draggable draggableId={card.id.toString()} index={index}>
			{(provided) => (
				<Box
					className={styles.Card}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<CardTitle title={card.title} />
					<CardContent card={card} />
					<AddButton cardId={card.id} type={card.type} />
				</Box>
			)}
		</Draggable>
	);
};

export default Card;
