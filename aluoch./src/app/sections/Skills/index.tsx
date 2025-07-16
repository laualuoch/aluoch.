/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';
import { Card } from '@/app/components/Card';

export const Skills: FC = () => {

  return (
    <Card section="Skills">
      <div className={style['skills-body']}>
        <p>Description about skills</p>
      </div>     
    </Card>
  )
}