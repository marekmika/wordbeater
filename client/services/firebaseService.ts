import getConfig from 'next/config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
import { UserState } from '@redux/slices/user'

export type UserData = {
  email: string
  createdAt: number
  bestScores: {
    beginner: number
  }
}

const { publicRuntimeConfig } = getConfig()

const config = {
  apiKey: publicRuntimeConfig.API_KEY,
  authDomain: publicRuntimeConfig.AUTH_DOMAIN,
  databaseURL: publicRuntimeConfig.DATABASE_URL,
  projectId: publicRuntimeConfig.PROJECT_ID,
}

export function initializeFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(config)
  }

  return firebase
}

const initializedFirebase = initializeFirebase()
const db = initializedFirebase.firestore()
const scoresRef = db.collection('gamers')

// TODO: Types of firebase
export const fetchUserData = async (): Promise<any | null> =>
  new Promise((resolve, reject) => {
    return initializedFirebase.auth().onAuthStateChanged(
      async (user) => {
        console.log('🚀 ~ fetchUserData', user)
        if (!user) {
          return resolve(null)
        }

        const docRef = await scoresRef.doc(user.uid).get()

        if (docRef.exists) {
          return resolve(docRef.data())
        }

        const newUserDoc = {
          email: user.email,
          createdAt: Math.floor(Date.now() / 1000),
          bestScores: {
            beginner: 0,
          },
          photoUrl: user.photoURL,
        }

        await scoresRef.doc(user.uid).set(newUserDoc)

        resolve(newUserDoc)
      },
      (error) => reject(error)
    )
  })

export const signInWithPopup = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  let loggedUser: UserState

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

export const updateUserScore = async (user: UserState, score: number) => {
  if (!user || !user.bestScores || !user.uid || !score) {
    return
  }

  if (user.bestScores.beginner >= score) {
    return
  }

  try {
    return scoresRef.doc(user.uid).update({ bestScores: { beginner: score } })
  } catch (error) {
    console.log({ error })
  }
}

export const fetchBestBeginnerGamers = async () => {
  const docs = await scoresRef.orderBy('email', 'desc').limit(3).get()
  const betBeginnerGamers: UserData[] = []

  docs.forEach((doc) => {
    betBeginnerGamers.push(doc.data() as UserData)
  })

  return betBeginnerGamers.sort(
    (a, b) => Number(b.bestScores.beginner) - Number(a.bestScores.beginner)
  )
}

export const logoutUser = async () => {
  return initializedFirebase.auth().signOut()
}
