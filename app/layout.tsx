import type { Metadata } from 'next'
import { source_sans } from '@/app/ui/fonts'
import AppLogo from '@/app/ui/logo'
import UserInfo from '@/app/ui/userInfo'
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
      <body className={source_sans.className}>
        <AppLogo />
        <UserInfo isLogin=""/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
