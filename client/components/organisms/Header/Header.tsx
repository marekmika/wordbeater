import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import theme from '@styles/theme'
import Auth from '@components/blocks/Auth/Auth'
import LinkButton from '@components/elements/LinkButton/LinkButton'
import { desktop } from '@components/shared/utils'
import Logo from '@components/elements/Logo/Logo'
import { UserState } from '@redux/slices/user'

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

const NavigationContainer = styled.div`
  display: flex;
  gap: 1rem;
`

type Props = {
  user: UserState
  onLogoutClick: () => void
  onLoginClick: () => void
}

const Header = ({ user, onLogoutClick, onLoginClick }: Props): JSX.Element => {
  const router = useRouter()
  const redirectToBestScores = useCallback(() => {
    return router.push('/best-scores')
  }, [router])

  return (
    <HeaderWrapper>
      <NavWrapper>
        <Logo href="/" label="WordBeater" />
        <NavigationContainer>
          <LinkButton onClickAction={redirectToBestScores}>
            Best scores
          </LinkButton>
          <Auth
            user={user}
            onLogoutClick={onLogoutClick}
            onLoginClick={onLoginClick}
          />
        </NavigationContainer>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
