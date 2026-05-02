import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Query Cost Alert — Stop Surprise Database Bills',
  description: 'Monitor database query costs in real-time. Get instant alerts when queries exceed your budget thresholds. Supports AWS RDS, Google Cloud SQL, and Azure SQL.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ee1e409-1c54-48e7-a392-3f7a2e0f8235"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
