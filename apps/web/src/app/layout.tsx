import Header from '@/components/layouts/header/Header';
import PageTransition from '@/components/transitions/PageTransition';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Spex',
  description: 'Universal Android experience powered by Spex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-white
          dark:bg-slate-900
        `}
      >
        {/* Global Page Transition */}
        <PageTransition />

        {/* Global Header */}
        <Header />

        {/* Global Page Content */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
