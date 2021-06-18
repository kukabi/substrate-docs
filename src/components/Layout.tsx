import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MdxLink } from 'gatsby-theme-i18n'
import Header from './Header'
import Footer from './Footer'

const components = {
  a: MdxLink,
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="container min-h-screen">
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
