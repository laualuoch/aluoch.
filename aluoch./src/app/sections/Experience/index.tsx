/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';
import { Card } from '@/app/components/Card';

export const Experience: FC = () => {

  return (
    <Card section="Experience">
      <div className={style['experience-body']}>
        <p>Description about experience</p>
      </div>     
    </Card>
  )
}