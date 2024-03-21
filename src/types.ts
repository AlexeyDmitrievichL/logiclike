export interface IMenu {
    tags: string[];
    activeTag: string;
    changeActiveTag: (tag: string) => void;
}

export interface ICard {
    bgColor: string;
    image: string;
    name: string;
    tags: string[];
}

export interface IFullCard extends ICard {
    id: string;
}

export interface ICardRow {
    rowCards: IFullCard[],
    rowSize: number,
}