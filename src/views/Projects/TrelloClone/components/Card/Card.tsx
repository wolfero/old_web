import React, { useContext, useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';
import { BsTrashFill } from 'react-icons/bs';

import { StoreApi } from '../Board/Board';
import { RowProps, CardProps } from '../../model/CardType';

import styles from './Card.module.scss';

export const Row = ({ card, listId, index }: RowProps) => {
	if (!card) {
		return null;
	}

	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided) => <Card provided={provided} listId={listId} card={card} />}
		</Draggable>
	);
};

const Card = ({ card, listId, provided }: CardProps) => {
	if (!card) {
		return null;
	}

	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(card.title);
	const { updateCardTitle, removeCard } = useContext(StoreApi);
	const handleOnBlur = (savedTitle: string) => {
		setOpen((prev) => !prev);
		updateCardTitle(savedTitle, listId, card.id);
		setNewTitle(savedTitle);
	};
	const handleDelete = () => removeCard(listId, card.id);

	return (
		<>
			{open ? (
				<Input
					type={'text'}
					defaultValue={newTitle}
					onBlur={(e) => handleOnBlur(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							const target = e.target as HTMLInputElement;
							handleOnBlur(target.value);
						}
					}}
					autoFocus
				/>
			) : (
				<Heading
					as={'h3'}
					size={'md'}
					key={card.id}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className={styles.Card}
					onClick={() => setOpen((prev) => !prev)}
				>
					{newTitle}
					<button className={styles.Button} onClick={handleDelete}>
						<BsTrashFill />
					</button>
				</Heading>
			)}
		</>
	);
};

export default Card;
