import { TaskType } from "./TaskType";

export type CardType = {
	id: string;
	title: string;
	type: string;
	tasks: TaskType[];
};