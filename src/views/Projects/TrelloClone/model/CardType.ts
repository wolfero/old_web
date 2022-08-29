import { Timestamp } from 'firebase/firestore';

import { TaskType } from './TaskType';

export interface CardType {
	id: string;
	title: string;
	type: string;
	tasks: TaskType[];
	timestamp: Timestamp;
}
