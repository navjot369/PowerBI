import type { Metadata } from 'next'
import { poppins } from '@/app/ui/fonts'
import '@/app/ui/globals.css'


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
      <body className={poppins.className + " bg-[#ecf0f2] box-border"}>
        {children}
      </body>
    </html>
  )
}
