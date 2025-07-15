/**
 *  Author: Aluoch L.
 *  Copyright @ 2025
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="header-bar">
          <h1 className="header">Laurine A.</h1>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <span>Copyright © 2025</span>
        </footer>
      </body>
    </html>
  )
}
