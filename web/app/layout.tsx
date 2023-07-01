import { Metadata } from 'next'

import './globals.css'
import { css } from '@/styled-system/css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tamanegi',
  description: 'Tamanegi app',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.className}, ${css({ background: 'darkorange' })}`}>{children}</body>
    </html>
  )
}
