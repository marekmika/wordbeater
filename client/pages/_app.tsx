import React, { useEffect } from 'react'
import { AppContext, AppProps } from 'next/app'
import { useDispatch } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { wrapper } from '@redux/store'
import cookies from 'next-cookies'
import cookie from 'js-cookie'
import { NextPageContext } from 'next'

import { initializeFirebase } from '@services/firebaseService'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'
import { setUser, UserState } from '@redux/slices/user'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const IS_SERVER = typeof window === 'undefined'
const FIREBASE_TOKEN_NAME = 'firebaseToken'

const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: ${theme.colors.white};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`

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
      <StyledToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </ThemeProvider>
  )
}

// TODOS:
// Rewrite to atomic design

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

    const userData: UserState = await fetch(`${baseUrl}/api/validate`, {
      headers,
    }).then((res) => {
      return res.json()
    })

    return userData
  } catch (e) {
    console.error(e)
  }
}

export default wrapper.withRedux(App)
