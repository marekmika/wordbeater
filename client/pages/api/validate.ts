import { UserState } from '@redux/slices/user'
import admin from 'firebase-admin'
import { NextApiRequest, NextApiResponse } from 'next'

const {
  PUBLIC_FIREBASE_PROJECT_ID,
  PRIVATE_KEY,
  CLIENT_EMAIL,
  PUBLIC_FIREBASE_DB_URL,
} = process.env

const firebaseInstance = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        projectId: PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: CLIENT_EMAIL,
        privateKey: PRIVATE_KEY,
      }),
      databaseURL: PUBLIC_FIREBASE_DB_URL,
    })
  : admin.app()

const validate = async (token: string) => {
  const decodedToken = await firebaseInstance.auth().verifyIdToken(token, true)
  console.log('🚀 ~ validate ~ decodedToken', decodedToken)

  await firebaseInstance.auth().getUser(decodedToken.uid)
  console.log('After getUser')
  const doc = await firebaseInstance
    .firestore()
    .collection('gamers')
    .doc(decodedToken.uid)
    .get()

  if (!doc.exists) {
    return null
  }
  console.log('🚀 ~ validate ~ doc', doc)

  return { uid: decodedToken.uid, ...doc.data() }
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<UserState | any> => {
  try {
    if (!req.headers.authorization) {
      return res.status(400)
    }

    const authorization = JSON.parse(req.headers.authorization)
    const { token } = authorization
    console.log('🚀 ~ token', token)

    if (!token) {
      return res.status(403).send({
        errorCode: 403,
        message: 'Auth token missing.',
      })
    }

    const result = await validate(token)
    return res.status(200).send(result)
  } catch (err) {
    return res.status(500).send(err)
  }
}
