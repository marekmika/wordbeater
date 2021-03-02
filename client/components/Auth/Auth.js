import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import theme from '@styles/theme'
import { signUserAction, logoutUserAction } from '@redux/actions/userActions'
import { userSelector } from '@redux/reducers/user'

const Auth = () => {
  const dispatch = useDispatch()
  const user = userSelector()

  const [isAvatarShown, setIsAvatarShown] = useState(user?.email)

  const authentication = async () => {
    try {
      await dispatch(signUserAction())
    } catch (error) {
      console.log({ error })
    }
  }

  const logout = async () => {
    try {
      await dispatch(logoutUserAction())
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <AuthContainer>
      {user?.email ? (
        <UserContainer
          onMouseEnter={() => setIsAvatarShown(false)}
          onMouseLeave={() => setIsAvatarShown(true)}
        >
          {isAvatarShown ? (
            <Avatar
              alt={user?.displayName}
              src={user?.avatarUrl}
              style={{ height: '65px', width: '55px' }}
            />
          ) : (
            <StyledButton onClick={logout}>Logout</StyledButton>
          )}
        </UserContainer>
      ) : (
        <StyledButton onClick={authentication}>Login</StyledButton>
      )}
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
  color: inherit;
  margin: auto 0;
`

const UserContainer = styled.div``

const StyledButton = styled.button`
  color: inherit;
  background-color: inherit;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-decoration-line: underline;
  border: 0;

  &:hover {
    color: ${theme.colors.grey};
    cursor: pointer;
  }
`

export default Auth
