import { DraggableProvided } from 'react-beautiful-dnd';

export interface CardType {
	id: string;
	title: string;
	type: string;
}

export type CardProps = {
	card: CardType;
	listId: string;
	provided: DraggableProvided;
};

export type RowProps = {
	card: CardType;
	listId: string;
	index: number;
};
