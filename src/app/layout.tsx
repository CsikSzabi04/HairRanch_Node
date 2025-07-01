import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Hair Ranch',
  description: 'Hair Ranch - Barbershop Kecskemétem - "Ahol minden férfi és nő, legjobb stílusban távozik"',
  verification: {
    google: 'LTPUXJBvz_BkBtBucV3HYGCLwDpNPY0hdIziP76PLhI'
  },
   icons: {
    icon: [
      { url: '/roundd.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <head>
        <link id="rel" rel="icon" type="image/png" href="roundd.png" />
      </head>
      <body className="bg-[#fef8ee] text-[#3b2f23] font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
