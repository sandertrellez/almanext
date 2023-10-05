"use client"
import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/context/auth'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={inter.className}>
      <AuthProvider>
        <Navbar></Navbar>
      </AuthProvider>
      {children}
    </main>
  )
}
