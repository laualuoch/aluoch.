/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';
import { Card } from '@/app/components/Card';
import { ExperienceCard } from './ExperienceCard';

export const Experience: FC = () => {

  return (
    <Card section="Experience">
      <div className={style['experience-body']}>
        <ExperienceCard
        role="Software Engineer"
        company="OLLMOO"
        summary="Joined as a softwre engineer intern 
        with a focus on fullstack engineering and cloud development."
        stack={['NextJs, Node.js, Sass, Digital Ocean']}
         />
      </div>     
    </Card>
  )
}