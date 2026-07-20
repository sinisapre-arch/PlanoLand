import type { Metadata, Viewport } from 'next'
import './globals.css'
import ClientScripts from './components/ClientScripts'

export const metadata: Metadata = {
  title: 'PlanoLand — Ландшафтная студия полного цикла',
  description: 'Студия ландшафтного дизайна PlanoLand. Создаем Скандинавские сады® во всех климатических зонах. Более 300 садов в активе команды.',
  openGraph: {
    title: 'PlanoLand — Ландшафтная студия полного цикла',
    description: 'Студия ландшафтного дизайна PlanoLand. Создаем Скандинавские сады®.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EBE8E6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // NOTE: `has-js` is set here in SSR markup (not added by a script at runtime)
  // so that the server-rendered HTML and the client agree — otherwise React
  // throws a hydration mismatch. Interactivity lives in <ClientScripts />.
  return (
    <html lang="ru" className="ltr has-js" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/assets/ui/logo.svg" type="image/svg+xml" sizes="any" />
        <meta name="theme-color" content="#EBE8E6" />
      </head>
      <body className="page-home">
        {children}
        <ClientScripts />
      </body>
    </html>
  )
}
