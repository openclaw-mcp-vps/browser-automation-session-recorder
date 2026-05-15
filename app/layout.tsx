import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SessionScript – Record Browser Actions as Automation Scripts',
  description: 'Chrome extension that records user interactions and generates Puppeteer/Playwright code for automating repetitive browser tasks. Built for QA engineers and developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a49d3b25-d34b-4e40-be8f-737127945575"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
