/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';
import { Card } from '@/app/components/Card';

export const Projects: FC = () => {

  return (
    <Card section="Projects">
      <div className={style['experience-body']}>
        <p>Description about projects</p>
      </div>     
    </Card>
  )
}