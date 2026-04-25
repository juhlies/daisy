import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
const navbar = (
  <Navbar
    logo={<b>Daisy</b>}
    logoLink='/'
    projectLink='https://github.com/juhlies/daisy'
  />
)
const footer = <Footer>© {new Date().getFullYear()} Daisy (most of the documentation is lowkey skidded from blink)</Footer>
 
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        backgroundColor={{
          'light': 'rgb(239, 241, 245)',
          'dark': 'rgb(30, 30, 46)'
        }}
        color={{
          hue: {
            'light': 266,
            'dark': 267
          },
          saturation: {
            'light': 85,
            'dark': 84
          },
          lightness: {
            'light': 58,
            'dark': 81
          }
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/juhlies/daisy"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}