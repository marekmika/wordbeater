import React from 'react'
import NextApp from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import createStore from '@redux/store'
import { createWrapper } from 'next-redux-wrapper'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

// const IS_SERVER = typeof window === 'undefined'

const store = createStore()

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    const appProps = await Component.getInitialProps?.(ctx)

    return { ...appProps }
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
