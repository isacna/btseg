import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BTSEG',
  description: 'Assessoria em Segurança do Trabalho',
  generator: 'Isac A.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
