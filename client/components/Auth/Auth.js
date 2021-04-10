import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import LinkButton from '@components/shared/LinkButton'

import { signUserAction, logoutUserAction } from '@redux/actions/userActions'
import { userSelector } from '@redux/reducers/user'

const Auth = () => {
  const dispatch = useDispatch()
  const user = userSelector()

  const [isMouseOnAuthContainer, setIsMouseOnAuthContainer] = useState(
    user?.email
  )

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
    <AuthContainer
      onMouseEnter={() => setIsMouseOnAuthContainer(false)}
      onMouseLeave={() => setIsMouseOnAuthContainer(true)}
    >
      {user?.email ? (
        isMouseOnAuthContainer ? (
          <Avatar
            alt={user?.displayName}
            src={user?.avatarUrl}
            style={{ height: '4rem', width: '5rem' }}
          />
        ) : (
          <LinkButton onClickAction={logout}>Logout</LinkButton>
        )
      ) : (
        <LinkButton onClickAction={authentication}>Login</LinkButton>
      )}
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
  mi-height: 5rem;
  color: inherit;
  margin: auto 0;
`

export default Auth
