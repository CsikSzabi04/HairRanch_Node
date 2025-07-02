import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Hair Ranch - Kecskemét Fodrász & Barbershop',
  description: 'Hair Ranch Kecskemét – Fodrász és Barbershop, ahol minden férfi és nő a legjobb stílusban távozik. Profi hajvágás, styling, és prémium szolgáltatások.',
  verification: {
    google: 'LTPUXJBvz_BkBtBucV3HYGCLwDpNPY0hdIziP76PLhI'
  },
  icons: {
    icon: [
      { url: '/roundd.png', type: 'image/png' },
    ],
  },
  // Adding openGraph and twitter cards is great for social & SEO too:
  openGraph: {
    title: 'Hair Ranch - Kecskemét Fodrász & Barbershop',
    description: 'Prémium fodrász és barber szolgáltatások Kecskeméten a Hair Ranch-nál.',
    url: 'https://hairranch.hu',
    siteName: 'Hair Ranch',
    images: [
      {
        url: 'https://hairranch.hu/roundd.png',
        width: 800,
        height: 600,
        alt: 'Hair Ranch Logo',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Ranch - Kecskemét Fodrász & Barbershop',
    description: 'Prémium fodrász és barber szolgáltatások Kecskeméten a Hair Ranch-nál.',
    images: ['https://hairranch.hu/roundd.png'],
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
