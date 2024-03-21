import { ICard } from '../../types';
import './style.scss';

export const Card = ({ bgColor, image, name, tags }: ICard) => {

    return (
        <div className="card">
            <div className="cardImage" style={{ backgroundColor: bgColor }}>
                <img src={image} alt={name} width="144px" height="144px" />
            </div>
            <div className="cardTitle">
                <span>{name}</span>
            </div>
        </div>
    )
}