import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import Router from 'next/router'
import firebase from 'firebase/app'

import initFirebase from '../services/auth'

initFirebase()

const provider = new firebase.auth.GoogleAuthProvider()

export default function Join() {
  const [authorizing, setAuthorizing] = useState(false)

  const handleAuthentication = async () => {
    setAuthorizing(true)

    try {
      const result = await firebase.auth().signInWithPopup(provider)

      const { user, credentials } = result

      if (!user) {
        throw new Error('Issue')
      }

      //   Router.push('/')
    } catch (error) {}

    setAuthorizing(false)
  }
  return (
    <div>
      <Button onClick={handleAuthentication}>Get started</Button>
    </div>
  )
}
