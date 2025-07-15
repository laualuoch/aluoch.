/**
 *  Author: Aluoch L.
 *  Copyright @ 2025
 * 
 */

import { Card } from './components/Card';
import { Experience } from './sections/Experience';
import style from './style.module.scss';

export default function Home() {
  return (
    <main className={style['main-section']}>
    <div className={style['section-one']}>
      <Card section="Experience">
        <Experience />
      </Card>
    </div>

    <div className={style['section-two']}>
      <div className='section-three'>
        <div className={style['card']}>
          <p>Education</p>
        </div>
      </div>

      <div className='section-four'>
        <div className={style['projects-section']}>Projects</div>

        <div className={style['section-five']}>
          <div className={style['skills-section']}>Skills</div>
          <div className={style['contact-section']}>Contact</div>
        </div>
      </div>
    </div>
  </main>
  )
}