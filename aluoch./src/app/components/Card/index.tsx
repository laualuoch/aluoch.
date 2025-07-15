/**
 *  Author: Aluoch L.
 *  Copyright@2025
 * 
 */

import { IconArrowsMaximize } from "@tabler/icons-react";
import { FC, PropsWithChildren } from "react";
import style from './style.module.scss';

interface ICard {
    section: string;
}

export const Card: FC<PropsWithChildren<ICard>> = ({ 
    section,
    children,
}) => {

    return (
        <div className={style['card']}>
            <div className={style['card-header']}>
                <h2>{section}</h2>
                <button className={style['expand-button']}>
                    <span>
                        <IconArrowsMaximize />
                    </span>
                </button>
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}