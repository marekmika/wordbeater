import React from 'react'
import NextApp from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import createStore from '@redux/store'
import { createWrapper } from 'next-redux-wrapper'
import cookies from 'next-cookies'
import cookie from 'js-cookie'

import { initializeFirebase } from '@services/firebaseService'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

const IS_SERVER = typeof window === 'undefined'
const FIREBASE_TOKEN_NAME = 'firebaseToken'

const store = createStore()

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    const appProps = await Component.getInitialProps?.(ctx)

    const { firebaseToken } = cookies(ctx)

    if (IS_SERVER && firebaseToken) {
      const dev = process.env.NODE_ENV === 'development'

      const server = dev ? 'http://localhost:3000' : 'NOT_EXISTS_YET'

      try {
        const headers = {
          'Context-Type': 'application/json',
          Authorization: JSON.stringify({ token: firebaseToken }),
        }
        const userData = await fetch(`${server}/api/validate`, {
          headers,
        }).then((res) => res.json())

        return { ...userData, ...appProps }
      } catch (e) {
        console.log(e)
      }
    }

    return { ...appProps }
  }

  componentDidMount() {
    initializeFirebase()
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken()
          cookie.set(FIREBASE_TOKEN_NAME, token, { expires: 14 })
        } else {
          cookie.remove(FIREBASE_TOKEN_NAME)
        }
      })
  }

  render() {
    const { Component, router, pageProps } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component key={router.route} router={router} pageProps={pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default createWrapper(createStore).withRedux(App)
