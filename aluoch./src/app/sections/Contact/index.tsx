/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';
import { Card } from '@/app/components/Card';

export const Contact: FC = () => {

  return (
    <Card section="Contact">
      <div className={style['contact-body']}>
        <p>Description about contact</p>
      </div>     
    </Card>
  )
}