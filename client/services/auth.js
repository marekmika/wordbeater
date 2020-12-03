import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

const config = {
  apiKey: 'AIzaSyDCoXNKsOWaUskMzeaeHskWVYYQxSAxEQc',
  authDomain: 'wordbeater-next.firebaseapp.com',
  databaseURL: 'https://wordbeater-next.firebaseio.com',
  projectId: 'wordbeater-next',
}

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}
