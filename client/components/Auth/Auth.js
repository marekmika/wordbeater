import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import LinkButton from '@components/shared/LinkButton'
import { desktop } from '@components/shared/utils'

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
      return dispatch(signUserAction())
    } catch (error) {
      console.log({ error })
    }
  }

  const logout = async () => {
    try {
      return dispatch(logoutUserAction())
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
          <StyledAvatar alt={user?.displayName} src={user?.avatarUrl} />
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

export default Auth
