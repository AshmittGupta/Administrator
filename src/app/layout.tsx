import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const ClientLayout = dynamic(() => import('../components/ClientLayout'), {
  ssr: false
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearnXR Admin Dashboard',
  description: 'Analytics and Management Platform for LearnXR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 