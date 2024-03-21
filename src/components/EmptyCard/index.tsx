import './style.scss';

export const EmptyCard = () => {
    return (
        <div className="emptyCard">
            <div className="emptyCardImage">
                <img width="144px" height="144px" />
            </div>
            <div className="emptyCardTitle" />
        </div>
    )
}