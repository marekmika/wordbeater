import React from 'react'
import NextApp from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import createStore from '@redux/store'
import withRedux from 'next-redux-wrapper'
import { shape, string, elementType, object } from 'prop-types'

import cookies from 'next-cookies'
import cookie from 'js-cookie'

import { initializeFirebase } from '@services/firebaseService'
import { setUserAction } from '@redux/actions/userActions'
import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

const IS_SERVER = typeof window === 'undefined'
const FIREBASE_TOKEN_NAME = 'firebaseToken'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    await handleCurrentUser(ctx)

    const pageProps = await Component.getInitialProps?.(ctx)

    return { pageProps }
  }

  componentDidMount() {
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
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component pageProps={pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

const handleCurrentUser = async (ctx) => {
  // TODO: Check next doc with getServerSideProps
  // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
  if (!IS_SERVER) {
    return
  }

  const { store } = ctx
  const { firebaseToken } = cookies(ctx)

  if (firebaseToken) {
    const dev = process.env.NODE_ENV === 'development'

    const server = dev ? 'http://localhost:3000' : 'NOT_EXIST_YET'

    try {
      const headers = {
        'Context-Type': 'application/json',
        Authorization: JSON.stringify({ token: firebaseToken }),
      }

      const userData = await fetch(`${server}/api/validate`, {
        headers,
      }).then((res) => res.json())

      store.dispatch(setUserAction(userData))
    } catch (e) {
      console.log(e)
    }
  }
}

App.propTypes = {
  Component: elementType.isRequired,
  store: object.isRequired,
  router: shape({
    route: string.isRequired,
  }).isRequired,
  pageProps: object,
}

export default withRedux(createStore)(App)
