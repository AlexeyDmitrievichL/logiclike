import { memo } from 'react';
import { IMenu } from '../../types';
import classNames from 'classnames';
import './style.scss';

const MenuComponent = ({ tags, activeTag, changeActiveTag }: IMenu) => {

    return (
        <div className="menu">
            {tags.map(tag => (
                <div
                    key={tag}
                    className={classNames("menuElement", { "activeMenuElement": activeTag === tag })}
                    onClick={() => activeTag !== tag ? changeActiveTag(tag) : null}
                >
                    <span className="menuText">{tag}</span>
                </div>
            ))}
        </div>
    )
}

export const Menu = memo(MenuComponent)