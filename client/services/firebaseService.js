import getConfig from 'next/config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

const { publicRuntimeConfig } = getConfig()

const config = {
  apiKey: publicRuntimeConfig.apiKey,
  authDomain: publicRuntimeConfig.authDomain,
  databaseURL: publicRuntimeConfig.databaseURL,
  projectId: publicRuntimeConfig.projectId,
}

export function initializeFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(config)
  }

  return firebase
}

const initializedFirebase = initializeFirebase()
const db = initializedFirebase.firestore()

// TODO: Seperate creation of user in database from fetching UserData
// TODO: Does newUserDoc really need uid?
export const fetchUserData = async () => {
  return new Promise((resolve, reject) => {
    initializedFirebase.auth().onAuthStateChanged(
      async (user) => {
        if (!user) {
          return resolve(null)
        }

        const scoresRef = db.collection('gamers')

        const docRef = await scoresRef.doc(user.uid).get()

        if (docRef.data()) {
          return resolve(docRef.data())
        }

        const newUserDoc = {
          uid: user.uid,
          email: user.email,
          createdAt: Math.floor(Date.now() / 1000),
          bestScores: {
            beginner: 0,
          },
        }

        await scoresRef.doc(user.uid).set(newUserDoc)

        resolve(newUserDoc)
      },
      (error) => reject(error)
    )
  })
}

export const signInWithPopup = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  let loggedUser = null

  try {
    loggedUser = await fetchUserData()

    if (!loggedUser?.uid) {
      await initializedFirebase.auth().signInWithPopup(provider)

      return fetchUserData()
    }

    return loggedUser
  } catch (error) {
    console.log({ error })
  }
}

export const updateUserScore = async (user, score) => {
  if (!user || !score) {
    return
  }

  if (user.bestScores.beginner >= score) {
    return
  }

  try {
    const scoresRef = db.collection('gamers')

    return scoresRef.doc(user.uid).update({ bestScores: { beginner: score } })
  } catch (error) {
    console.log({ error })
  }
}

export const logoutUser = async () => {
  return initializedFirebase.auth().signOut()
}
