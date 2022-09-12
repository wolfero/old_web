import { Timestamp } from 'firebase/firestore';

import { CardType } from './CardType';

export interface ListType {
	id: string;
	title: string;
	type: string;
	cards: CardType[];
	timestamp: Timestamp;
}
