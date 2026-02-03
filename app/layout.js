import './globals.css'

export const metadata = {
  title: 'ProspectEngine',
  description: 'AI-Powered Prospecting Intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
