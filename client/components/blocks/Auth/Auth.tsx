import React, { useCallback, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import LinkButton from '@components/elements/LinkButton/LinkButton'
import { UserState } from '@redux/slices/user'

import theme from '@styles/theme'
import Avatar from '@components/elements/Avatar/Avatar'
import { desktop } from '@components/shared/utils'

const UserAuthContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: -14rem;
  border: 2px solid ${theme.colors.grey};
  background-color: ${theme.colors.black};
  height: 6rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 3rem 0;
  z-index: 10;

  ${desktop`
    left: -6rem;
  `}
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AuthContainer = styled.div`
  position: relative;
  color: inherit;
  margin: auto 0;
`

type Props = {
  user: UserState
  onLogoutClick: () => void
  onLoginClick: () => void
}

const Auth = ({ user, onLogoutClick, onLoginClick }: Props): JSX.Element => {
  const avatarRef = useRef<HTMLDivElement>(null)
  const authContainerRef = useRef<HTMLDivElement>(null)
  const [isUserAuthContainerVisible, setIsUserAuthContainerVisible] =
    useState(false)

  const toggleUserMenu = useCallback(() => {
    setIsUserAuthContainerVisible(!isUserAuthContainerVisible)
  }, [setIsUserAuthContainerVisible, isUserAuthContainerVisible])

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        authContainerRef.current &&
        authContainerRef.current !== event.target &&
        !authContainerRef.current?.contains(event.target as Node)
      ) {
        setIsUserAuthContainerVisible(false)
      }
    },
    [setIsUserAuthContainerVisible]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <AuthContainer>
      {user?.email ? (
        <div ref={authContainerRef}>
          <Avatar
            ref={avatarRef}
            alt={user?.email}
            src={user?.photoUrl}
            onClick={toggleUserMenu}
          />
          {isUserAuthContainerVisible && (
            <UserAuthContainer>
              <UserInfo>
                {user?.email}
                <p> Best score: {user?.bestScores?.beginner}</p>
              </UserInfo>
              <LinkButton onClickAction={onLogoutClick}>Logout</LinkButton>
            </UserAuthContainer>
          )}
        </div>
      ) : (
        <LinkButton onClickAction={onLoginClick}>Login</LinkButton>
      )}
    </AuthContainer>
  )
}

export default Auth
