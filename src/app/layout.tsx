import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import AnimatedPageWrapper from '../components/AnimatedPageWrapper'

export const metadata: Metadata = {
  title: 'Hair Ranch - Kecskemét Fodrász ',
  description: 'Hair Ranch Kecskemét – Fodrász, ahol minden férfi és nő a legjobb stílusban távozik. Profi hajvágás, styling, és prémium szolgáltatások.',
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
    title: 'Hair Ranch - Kecskemét Fodrász',
    description: 'Prémium fodrász szolgáltatások Kecskeméten a Hair Ranch-nál.',
    url: 'https://hairranch.hu',
    siteName: 'Hair Ranch',
    images: [
      {
        url: '/roundd.png',
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
    title: 'Hair Ranch - Kecskemét Fodrász',
    description: 'Prémium fodrász szolgáltatások Kecskeméten a Hair Ranch-nál.',
    images: ['https://hairranch.hu/roundd.png'],
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <link id="rel" rel="icon" type="image/png" href="roundd.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Hair Ranch",
              "image": "https://hairranch.hu/roundd.png",
              "@id": "https://hairranch.hu",
              "url": "https://hairranch.hu",
              "address": {
                "@type": "6000",
                "streetAddress": "Kecskemét Március 15 utca 68",
                "addressLocality": "Kecskemét",
                "postalCode": "6000",
                "addressCountry": "hu_HU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.918247084813586,
                "longitude": 19.672797711643252
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "08:00",
                  "closes": "12:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/bartalbertold",
                "https://www.instagram.com/bartalbertold_hairranch/"
              ]
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
