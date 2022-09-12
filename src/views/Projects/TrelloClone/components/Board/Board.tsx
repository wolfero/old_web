import NoSSR from 'react-no-ssr';
import { Box } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';

import List from '../List/List';
import AddButton from '../AddButton/AddButton';
import { ListType as ListType } from '../../model/ListType';
import {
	addList,
	loadLists,
	removeList,
	updateListPosition,
	updateListTitle,
} from '../../utils/listManagement';
import {
	addCard,
	removeCard,
	updateCardTitle,
	updatedCardsPositionOnList,
	updateCardPositionOnDifferentList,
} from '../../utils/cardManagement';

import styles from './Board.module.scss';

export const StoreApi = createContext({
	addList,
	removeList,
	updateListTitle,
	addCard,
	removeCard,
	updateCardTitle,
});

//Custom Hook
const useListSubscription = () => {
	const [lists, setLists] = useState<ListType[]>([]);
	useEffect(() => {
		loadLists(setLists);
	}, []);
	return { lists };
};

const Board = () => {
	const { lists } = useListSubscription();
	const onDragEnd = async (result: DropResult) => {
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}

		if (type === 'list') {
			updateListPosition(lists, destination, source);
		} else if (source.droppableId === destination.droppableId) {
			updatedCardsPositionOnList(lists, destination, source);
		} else {
			updateCardPositionOnDifferentList(lists, result);
		}
	};

	return (
		<StoreApi.Provider
			value={{
				addList,
				addCard,
				updateListTitle,
				updateCardTitle,
				removeList,
				removeCard,
			}}
		>
			<NoSSR>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="all-droppables" direction="horizontal" type="list">
						{(provided) => (
							<div
								className={styles.Board}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{lists.map((list, index) => (
									<List list={list} key={list.id} index={index} />
								))}
								<Box className={styles.List}>
									<AddButton type="list" />
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
