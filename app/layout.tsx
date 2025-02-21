import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Joey's personal website",
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script defer src="https://cloud.umami.is/script.js" data-website-id="1d5a711d-7f27-401c-a0c0-712b1b844992"></script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
