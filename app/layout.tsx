import type { Metadata } from 'next'
import './styles/main.scss'

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
    <html lang="en" data-theme="light">
      <script defer src="https://cloud.umami.is/script.js" data-website-id="1d5a711d-7f27-401c-a0c0-712b1b844992"></script>
      <body>{children}</body>
    </html>
  )
}
