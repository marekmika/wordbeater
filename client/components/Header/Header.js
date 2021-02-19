import React from 'react'
import styled from 'styled-components'
import theme from '@styles/theme'
import Auth from '@components/Auth/Auth'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/game">WordBeater</Link>
        <Auth />
      </NavWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  color: ${theme.colors.white};
  margin-top: 2rem;
  margin-bottom: 12rem;
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: auto 15rem;
`

const Link = styled.a`
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

  font-size: 3rem;
  line-height: 59px;
`

// const StyledAuth = styled(Auth)`
//   position: relative;
//   color: inherit;
//   margin: auto 0;
// `

export default Header
