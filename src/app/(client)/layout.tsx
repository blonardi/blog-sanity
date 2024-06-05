import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/app/components/Navbar'
import { Provider } from '@/app/utils/Provider'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fira.className} h-full bg-lime-50 text-slate-900 dark:bg-slate-900 dark:text-lime-50 dark:selection:bg-lime-600`}>
        <Provider>
          <Navbar />
          <main className='mx-auto max-w-5xl px-6'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
