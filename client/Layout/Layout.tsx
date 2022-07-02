import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import Header from '@components/organisms/Header/Header'
import { toast } from 'react-toastify'

import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@redux/store'
import { logoutUserAction, signUserAction } from '@redux/slices/user'
import { toastOptions } from '@constants/toast'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)

  const authentication = useCallback(() => {
    try {
      dispatch(signUserAction())
    } catch (error) {
      console.error({ error })
      toast.error('User was not logged!', toastOptions)
    }
  }, [dispatch, signUserAction])

  const logout = useCallback(() => {
    try {
      dispatch(logoutUserAction())
    } catch (error) {
      console.error({ error })
    }
  }, [dispatch, logoutUserAction])

  return (
    <LayoutContainer>
      <Head>
        <title>WordBeater</title>
        <meta name="description" content={'WordBeater'} />
      </Head>
      <Header
        user={user}
        onLoginClick={authentication}
        onLogoutClick={logout}
      />
      {children}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div``

export default Layout
