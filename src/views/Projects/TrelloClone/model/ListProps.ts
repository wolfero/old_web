import { Card } from "./Card";

export type ListProps = {
	id: string;
	title: string;
	type: string,
	cards: Card[];
};