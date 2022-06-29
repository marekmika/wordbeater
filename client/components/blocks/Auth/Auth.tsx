import React, { useCallback, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import LinkButton from '@components/elements/LinkButton/LinkButton'
import { logoutUserAction, signUserAction } from '@redux/slices/user'
import { AppState } from '@redux/store'
import theme from '@styles/theme'
import Avatar from '@components/elements/Avatar/Avatar'

const UserAuthContainer = styled.div`
  position: absolute;
  top: 100px;
  left: -90px;
  border: 2px solid ${theme.colors.grey};
  height: 100px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 3rem 0;
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
  const [isMouseOnAuthContainer, setIsMouseOnAuthContainer] = useState(
    !!user?.email
  )

  const authentication = useCallback(() => {
    try {
      dispatch(signUserAction())
    } catch (error) {
      console.log({ error })
    }
  }, [dispatch, signUserAction])

  const logout = useCallback(() => {
    try {
      dispatch(logoutUserAction())
    } catch (error) {
      console.log({ error })
    }
  }, [dispatch, logoutUserAction])

  const toggleUserMenu = useCallback(() => {
    console.log(
      '🚀 ~ toggleUserMenu ~ isMouseOnAuthContainer',
      isMouseOnAuthContainer
    )
    setIsMouseOnAuthContainer(!isMouseOnAuthContainer)
  }, [setIsMouseOnAuthContainer, isMouseOnAuthContainer])

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        authContainerRef.current &&
        authContainerRef.current !== event.target &&
        !authContainerRef.current?.contains(event.target as Node)
      ) {
        setIsMouseOnAuthContainer(false)
      }
    },
    [setIsMouseOnAuthContainer]
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
          {isMouseOnAuthContainer && (
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
