import type { Metadata } from 'next'
import { poppins } from '@/app/ui/fonts'
import '@/app/ui/globals.css'


export const metadata: Metadata = {
  title: 'Courses for Careers',
  description: '100% Assured PL-300 Certification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className + "  box-border p-0"}>
        {children}
      </body>
    </html>
  )
}
