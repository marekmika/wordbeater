import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { node } from 'prop-types'

import theme from '@styles/theme'
import Header from '@components/Header/Header'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Head>
        <title>WordBeater</title>
        <meta name="description" content={'WordBeater'} />
      </Head>
      <Header />
      {children}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div``

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
