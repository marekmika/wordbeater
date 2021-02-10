import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import { node } from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>WordBeater</title>
        <meta name="description" content={'WordBeater'} />
      </Head>
      <Header />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
