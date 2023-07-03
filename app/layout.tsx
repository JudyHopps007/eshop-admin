import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eshop Admin',
  description: 'EShop Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
    
  )
}
