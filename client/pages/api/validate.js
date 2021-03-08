const admin = require('firebase-admin')

const serviceAccount = require('../../serviceAccountKey.json')

const firebaseInstance = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://wordbeater-next.firebaseio.com',
    })
  : admin.app()

const validate = async (token) => {
  const decodedToken = await firebaseInstance.auth().verifyIdToken(token, true)

  let userData = null

  await firebaseInstance.auth().getUser(decodedToken.uid)

  await firebaseInstance
    .firestore()
    .collection('gamers')
    .doc(decodedToken.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData = { ...doc.data() }
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error)
    })

  console.log({ userData })

  return userData
}

export default async (req, res) => {
  try {
    const { token } = JSON.parse(req.headers.authorization || '{}')
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
