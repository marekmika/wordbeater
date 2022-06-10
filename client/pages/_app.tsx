import React, { useEffect } from 'react'
import { AppContext, AppProps } from 'next/app'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { wrapper } from '@redux/store'
import cookies from 'next-cookies'
import cookie from 'js-cookie'
import { NextPageContext } from 'next'

import { initializeFirebase } from '@services/firebaseService'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'
import { setUser, UserState } from '@redux/slices/user'

const IS_SERVER = typeof window === 'undefined'
const FIREBASE_TOKEN_NAME = 'firebaseToken'

const App = (props: AppProps & { user: UserState }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    initializeFirebase()
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken()
          cookie.set(FIREBASE_TOKEN_NAME, token, { expires: 1 })
        } else {
          cookie.remove(FIREBASE_TOKEN_NAME)
        }
      })

    dispatch(setUser(props.user))
  }, [])

  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = await Component.getInitialProps?.(ctx)
  const result = await getCurrentUserData(ctx)

  return { pageProps, user: result }
}

const getCurrentUserData = async (ctx: NextPageContext<any>) => {
  if (!IS_SERVER) {
    return
  }

  const { firebaseToken } = cookies(ctx)
  if (!firebaseToken) {
    return
  }

  const isDev = process.env.NODE_ENV === 'development'
  const baseUrl = isDev ? 'http://localhost:3000' : 'NOT_EXIST_YET'
  try {
    const headers = {
      'Context-Type': 'application/json',
      Authorization: JSON.stringify({ token: firebaseToken }),
    }

    // TODO: Add axios to project
    const userData: UserState = await fetch(`${baseUrl}/api/validate`, {
      headers,
    }).then((res) => {
      return res.json()
    })

    return userData
  } catch (e) {
    console.log(e)
  }
}

export default wrapper.withRedux(App)
