import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google"
import "./globals.css"
import { EmailProvider } from "@/contexts/email-context"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <EmailProvider>
          {children}
        </EmailProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
