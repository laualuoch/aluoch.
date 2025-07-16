/**
 *  Author: Aluoch L.
 *  Copyright @ 2025
 * 
 */

import { Card } from './components/Card';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import style from './style.module.scss';

export default function Home() {
  return (
    <main className={style['main-section']}>
      <div className={style['intro-section']}>
        <h1>Software Engineer | Solutions Architect</h1>
        <p>I am a software engineer, highly intersted in system design and solutions architecting.
          I have 3 years of expereince in building scalable web and mobile applications and APIs.
        </p>
      </div>
      <div className={style['content-section']}>
        <div className={style['section-one']}>
          <Experience />
        </div>

        <div className={style['section-two']}>
          <div className={style['section-three']}>
            <Education />
          </div>

          <div className={style['section-four']}>
            <div className={style['projects-section']}>
              <Projects />
            </div>

            <div className={style['section-five']}>
              <div className={style['skills-section']}>
                <Skills />
              </div>
              <div className={style['contact-section']}>
                <Contact />
              </div>
            </div>
          </div>
        </div>
    </div>
  </main>
  )
}