import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import theme from '@styles/theme'
import Auth from '@components/Auth/Auth'
import LinkButton from '@components/shared/LinkButton'
import { desktop } from '@components/shared/utils'

const Header: React.FC = (): JSX.Element => {
  const router = useRouter()

  const redirectToBestScores = () => {
    return router.push('/best-scores')
  }

  return (
    <HeaderWrapper>
      <NavWrapper>
        <Logo href="/">WordBeater</Logo>
        <NavigationContainer>
          <LinkButton onClickAction={redirectToBestScores}>
            Best scores
          </LinkButton>
          <Auth />
        </NavigationContainer>
      </NavWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  color: ${theme.colors.white};
  margin-top: 1rem;
  margin-bottom: 3rem;

  ${desktop`
    margin-bottom: 10rem;
    margin-top: 3rem;
  `}
`

const NavWrapper = styled.nav`
  display: flex;
  min-height: 5rem;
  margin: auto 1rem;
  justify-content: space-between;

  ${desktop`
    margin: auto 15rem;
  `}
`

const Logo = styled.a`
  text-decoration: none;
  background-size: 100%;
  background-repeat: repeat;
  background-color: inherit;

  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) -79.2%,
    rgba(255, 255, 255, 0) -57.84%,
    #ffffff 73.63%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-weight: bold;

  font-size: 2rem;
  margin: auto 0;

  ${desktop`
    font-size: 3rem;
    line-height: 4rem;
  `}
`

const NavigationContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export default Header