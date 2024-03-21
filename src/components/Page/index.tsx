import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Menu } from '../Menu';
import { CardRow } from '../CardRow';
import { IFullCard } from '../../types';
import './style.scss';


const ROW_SIZE = 3;

export const Page = () => {

    const [cards, setCards] = useState([]);
    const [cardsByRows, setCardsByRows] = useState([]);
    const [tags, setTags] = useState([]);
    const [activeTag, setActiveTag] = useState('')

    useEffect(() => {
        axios.get(`https://logiclike.com/docs/courses.json`)
            .then(res => {
                if (res.data) {
                    setCards(res.data)
                }
            })
    }, [])

    useEffect(() => {
        if (tags[0]) {
            setActiveTag(tags[0])
        }
    }, [tags])

    useEffect(() => {
        if (cards.length) {
            const tags = cards.reduce((result, { tags }) => [...result, ...tags], [])
            const tagsArray = Array.from(new Set(tags));
            setTags(tagsArray)
        }
    }, [cards])

    useEffect(() => {
        if (activeTag) {
            const filteredCards = cards.filter((card: IFullCard) => card.tags.includes(activeTag))
            let groupedCards: any = [];
            for (let i = 0; i < Math.ceil(filteredCards.length / ROW_SIZE); i++) {  
                groupedCards[i] = filteredCards.slice((i * ROW_SIZE), (i * ROW_SIZE) + ROW_SIZE);
            }
            setCardsByRows(groupedCards)
        }
    }, [cards, activeTag])

    const changeActiveTag = useCallback((tag: string) => setActiveTag(tag), [])

    return (
        <div className="page">
            {activeTag && <Menu tags={tags} activeTag={activeTag} changeActiveTag={changeActiveTag} />}
            <div className="content">
                {
                    cardsByRows.map((rowCards: IFullCard[]) => <CardRow key={rowCards[0].id} rowCards={rowCards} rowSize={ROW_SIZE} />)
                }
            </div>
        </div>
    )
}