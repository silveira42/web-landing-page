import { Card } from 'components/card/card';

type CardListLanguages = {
	language: string;
	cardLists: CardList[];
};

type CardList = {
	title: string;
	cards: Card[];
};

export type Config = {
	cardListsLanguages: CardListLanguages[];
};
