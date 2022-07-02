import { ToastOptions } from 'react-toastify'
import { css } from 'styled-components'

const mediaQuery = (name: string) => (styles: TemplateStringsArray) => {
  return css`
    @media (min-width: ${({ theme }) => theme.breakPoints[name]}) {
      ${css(styles)}
    }
  `
}

export const wideScreen = mediaQuery('wideScreen')

export const desktop = mediaQuery('desktop')

export const tablet = mediaQuery('tablet')

export const smallMobile = mediaQuery('smallMobile')

export const largeMobile = mediaQuery('largeMobile')

export const tabletLarge = mediaQuery('tabletLarge')
