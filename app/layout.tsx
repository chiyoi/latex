import type { Metadata, Viewport } from 'next'
import '@radix-ui/themes/styles.css'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'LaTeX',
  description: 'LaTeX renderer.',
  icons: {
    icon: 'https://latex.neko03.moe/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FEF7FB' },
    { media: '(prefers-color-scheme: dark)', color: '#21121D' },
  ],
}

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
