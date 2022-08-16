import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

import ListTitle from '../ListTitle/ListTitle';
import ListContent from '../ListContent/ListContent';
import AddButton from '../AddButton/AddButton';
import { ListProps } from '../../model/ListProps';

import styles from './List.module.scss';

type CardsListProps = {
	list: ListProps;
	index: number;
};

const List = ({ list, index }: CardsListProps) => {

	return (
		<Draggable draggableId={list.id.toString()} index={index}>
			{(provided) => (
				<Box
					className={styles.Card}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<ListTitle title={list.title} />
					<ListContent list={list} />
					<AddButton listId={list.id} type={list.type} />
				</Box>
			)}
		</Draggable>
	);
};

export default List;
