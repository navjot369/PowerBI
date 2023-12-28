import type { Metadata } from 'next'
import { source_sans } from '@/app/ui/fonts'
import '@/app/ui/globals.css'
import Footer from './ui/footer';


export const metadata: Metadata = {
  title: 'Placed',
  description: 'From projects to placement with placed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={source_sans.className + " bg-[#ecf0f2]"}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
