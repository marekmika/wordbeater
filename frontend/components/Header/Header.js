import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link>WordBeater</Link>
      </NavWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primaryBlue};
  height: 50px;
`

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center; ;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
  font-weight: bold;
`

export default Header
