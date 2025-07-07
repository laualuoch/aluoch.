/**
 *  Author: Aluoch L.
 * 
 */

import './styles/globals.scss';

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
      <header className='header-bar'>
        <h1 className='header'>Laurine A.</h1>
      </header>
      <body>{children}</body>
      <footer className='footer'>
        <span className='footer-'>Copyright@2025</span>
      </footer>
    </html>
  )
}
