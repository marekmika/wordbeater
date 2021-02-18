import React from 'react'
import styled from 'styled-components'
import theme from '@styles/theme'
import Auth from '@components/Auth/Auth'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/game">WordBeater</Link>
        <StyledAuth />
      </NavWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  color: ${theme.colors.white};
  height: 50px;
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
  font-weight: bold;
`

const StyledAuth = styled(Auth)`
  position: relative;
  margin: 0.5rem;
`

export default Header
