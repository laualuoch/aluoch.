/**
 *  Author: Aluoch L.
 *  Copyright @2025
 * 
 */

import { FC } from 'react';
import style from './style.module.scss';

export const Experience: FC = () => {

  return (
    <div className={style['experience-section']}>
        <div className={style['experience-header']}>
            <div className={style['expereince-info']}>
                <h4><title></title></h4>
                <button>
                   Add
                </button>
            </div>
        </div>

        <div className={style['experience-body']}>
            <p>Description description description description</p>
        </div>
          
    </div>
  )
}