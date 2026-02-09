import './globals.css'

export const metadata = {
  title: 'Cassi Ferraz — Design Manager',
  description: 'Publicitária de formação, designer por vocação. 17+ anos de carreira em design e liderança de produtos EdTech.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
