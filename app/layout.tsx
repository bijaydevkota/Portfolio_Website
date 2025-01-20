import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animated Portfolio',
  description: 'A fully animated portfolio website built with Next.js and Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

