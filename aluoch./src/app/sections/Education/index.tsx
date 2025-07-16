/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';
import { Card } from '@/app/components/Card';

export const Education: FC = () => {

  return (
    <Card section="Education">
      <div className={style['education-body']}>
        <p>Description about Education</p>
      </div>     
    </Card>
  )
}