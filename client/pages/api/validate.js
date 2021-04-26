const admin = require('firebase-admin')

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

const validate = async (token) => {
  let decodedToken = null

  try {
    decodedToken = await firebaseInstance.auth().verifyIdToken(token, true)
  } catch (error) {
    console.log({ error })
  }

  let userData = null

  await firebaseInstance.auth().getUser(decodedToken.uid)

  await firebaseInstance
    .firestore()
    .collection('gamers')
    .doc(decodedToken.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData = { uid: decodedToken.uid, ...doc.data() }
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error)
    })

  return userData
}

export default async (req, res) => {
  try {
    const { token } = JSON.parse(req.headers.authorization)

    if (!token) {
      return res.status(403).send({
        errorCode: 403,
        message: 'Auth token missing.',
      })
    }

    const result = await validate(token)

    return res.status(200).send(result)
  } catch (err) {
    console.log(err)

    return res.status(200).send(undefined)
  }
}
