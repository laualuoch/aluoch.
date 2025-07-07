/**
 *  Author: Aluoch L.
 * 
 */

import style from './styles/globals.module.scss';

export const metadata = {
  title: 'Laurine A.',
  description: 'Fullstack Software Engineer Portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header className={style['header-bar']}>
        <h1 className={style['header']}>Laurine A.</h1>
      </header>
      <body>{children}</body>
      <footer className={style['footer']}>
        <span className={style['']}>Copyright@2025</span>
      </footer>
    </html>
  )
}
