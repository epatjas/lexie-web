import '@/styles/reset.css'
import '@/styles/variables.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Lexie - Helpompi tapa harjoitella',
  description: 'Lexie auttaa sinua harjoittelemaan tehokkasti ja saavuttamaan tavoitteesi.',
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