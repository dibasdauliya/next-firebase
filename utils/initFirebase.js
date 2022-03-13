import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'next-firebase-7cb5a.firebaseapp.com',
  projectId: 'next-firebase-7cb5a',
  storageBucket: 'next-firebase-7cb5a.appspot.com',
  messagingSenderId: '300564024901',
  appId: '1:300564024901:web:ed34cb6ceafae11010dd2c'
}

// Initialize Firebase
// if (!firebase.apps.length) {
firebase.initializeApp(config)
// }

const db = getFirestore()
export { db }
