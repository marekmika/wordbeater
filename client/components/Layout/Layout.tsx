import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import Header from '@components/Header/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
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

export default Layout
