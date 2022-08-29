import { DraggableProvided } from 'react-beautiful-dnd';

export interface TaskType {
	id: string;
	title: string;
	type: string;
}

export type TaskProps = {
	task: TaskType;
	index: number;
	cardId: string;
	provided: DraggableProvided;
};

export type RowProps = {
	task: TaskType;
	cardId: string;
	index: number;
};
