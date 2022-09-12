import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

import ListTitle from '../ListTitle/ListTitle';
import ListContent from '../ListContent/ListContent';
import AddButton from '../AddButton/AddButton';
import { ListType } from '../../model/ListType';

import styles from './List.module.scss';

type ListProps = {
	list: ListType;
	index: number;
};

const List = ({ list, index }: ListProps) => {
	return (
		<Draggable draggableId={list.id} index={index}>
			{(provided) => (
				<Box
					className={styles.List}
					{...provided.draggableProps}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
				>
					<ListTitle listId={list.id} title={list.title} provided={provided} />
					<ListContent list={list} />
					<AddButton listId={list.id} type={'card'} />
				</Box>
			)}
		</Draggable>
	);
};

export default List;
