/**
 *  Author: Aluoch L.
 *  Copyright@2025
 * 
 */

'use client';

import { FC, useState } from "react";
import style from './style.module.scss';
import { IconPlus } from "@tabler/icons-react";

interface IExperienceCard {
    role: string;
    company: string;
    summary: string;
    stack: string[];
}

export const ExperienceCard: FC<IExperienceCard> = ({
    role,
    company,
    summary,
    stack
}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={style['experience-card-container']}>
            <div className={style['experience-header']}>
                <div className={style['role-summary']}>
                    <p>{role}, {company}</p>
                </div>
                <button 
                type="button" 
                className={style['expand-button']}
                onClick={()=> setExpanded(!expanded)}>
                    <IconPlus />
                </button>

            </div>
            {expanded && (
            <div className={style['experience-body']}>
                <div className={style['summary']}>
                    <p>{summary}</p>
                </div>
                <div className={style['stack']}>
                    <p>{stack}</p>
                </div>
            </div>
            )}
            
        </div>
    )
}