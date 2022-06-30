import React, { useCallback, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import LinkButton from '@components/elements/LinkButton/LinkButton'
import { logoutUserAction, signUserAction } from '@redux/slices/user'
import { AppState } from '@redux/store'
import theme from '@styles/theme'
import Avatar from '@components/elements/Avatar/Avatar'
import { desktop } from '@components/shared/utils'

const UserAuthContainer = styled.div`
  position: absolute;
  top: 80px;
  left: -200px;
  background-color: grey;
  border: 2px solid ${theme.colors.grey};
  height: 100px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 3rem 0;
  z-index: 10;

  ${desktop`
    left: -90px;
    background-color: inherit;
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

const Auth: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const avatarRef = useRef<HTMLDivElement>(null)
  const authContainerRef = useRef<HTMLDivElement>(null)
  const [isUserAuthContainerVisible, setIsUserAuthContainerVisible] =
    useState(false)

  const authentication = useCallback(() => {
    try {
      dispatch(signUserAction())
    } catch (error) {
      console.error({ error })
    }
  }, [dispatch, signUserAction])

  const logout = useCallback(() => {
    try {
      dispatch(logoutUserAction())
    } catch (error) {
      console.error({ error })
    }
  }, [dispatch, logoutUserAction])

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
              <LinkButton onClickAction={logout}>Logout</LinkButton>
            </UserAuthContainer>
          )}
        </div>
      ) : (
        <LinkButton onClickAction={authentication}>Login</LinkButton>
      )}
    </AuthContainer>
  )
}

export default Auth
