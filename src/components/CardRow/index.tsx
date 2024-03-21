import { useMemo } from 'react';
import { Card } from '../Card';
import { EmptyCard } from '../EmptyCard';
import { IFullCard, ICardRow } from '../../types';
import './style.scss';

export const CardRow = ({ rowCards, rowSize }: ICardRow) => {

    const handledRowCards: (IFullCard | null)[] = useMemo(() => {
        const copiedRowCards: (IFullCard | null)[] = [...rowCards]
        for (let i = 0; i < rowSize; i++) {
            if (!copiedRowCards[i]) copiedRowCards.push(null)
        }
        return copiedRowCards;
    }, [rowCards, rowSize])

    return (
        <div className="cardRow">
            {handledRowCards.map((card, index) => {
                return card?.id ? <Card key={card.id} {...card} /> : <EmptyCard key={`${rowCards[0].id}-${index}`} />
            })}
        </div>
    )
}