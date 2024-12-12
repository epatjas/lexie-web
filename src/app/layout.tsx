import '@/styles/reset.css'
import '@/styles/variables.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lexie - Parempi tapa oppia',
  description: 'Lexie auttaa sinua harjoittelemaan kokeisiin ja tekemään läksyjä.',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <body className={`${inter.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
} 