import React, { useEffect } from 'react'
import { Button, Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { signUserAction } from '../../redux/actions/userActions'
import { userSelector } from '../../redux/reducers/user'

const Auth = () => {
  const dispatch = useDispatch()
  const user = userSelector()

  const handleAuthentication = async () => {
    try {
      await dispatch(signUserAction())
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {}, [])

  return (
    <AuthContainer>
      {user?.email ? (
        <Avatar alt={user?.displayName} src={user?.avatarUrl} />
      ) : (
        <Button onClick={handleAuthentication}>Get started</Button>
      )}
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
  margin: 0.2rem;
`

export default Auth
