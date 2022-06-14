import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import LinkButton from '@components/shared/LinkButton'
import { desktop } from '@components/shared/utils'
import { logoutUserAction, signUserAction } from '@redux/slices/user'
import { AppState } from '@redux/store'
import theme from '@styles/theme'

const Auth: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const avatarRef = useRef<HTMLDivElement>(null)
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
    setIsMouseOnAuthContainer(!isMouseOnAuthContainer)
  }, [setIsMouseOnAuthContainer, isMouseOnAuthContainer])

  // TODO: Add correct type for event
  const handleClickOutside = useCallback(
    (event: any) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
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
    <AuthContainer onClick={toggleUserMenu}>
      {user?.email ? (
        <>
          <StyledAvatar
            ref={avatarRef}
            alt={user?.email}
            src={user?.photoUrl}
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
        </>
      ) : (
        <LinkButton onClickAction={authentication}>Login</LinkButton>
      )}
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
  position: relative;
  color: inherit;
  margin: auto 0;
`

const StyledAvatar = styled(Avatar)`
  && {
    height: 2.5rem;
    width: 2.5rem;

    ${desktop`
      height: 4rem;
      width: 5rem;
    `}
  }
`

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

export default Auth
