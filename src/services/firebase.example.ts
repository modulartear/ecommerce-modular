// Firebase Config - COPIA a firebase.ts con tus valores
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "TU_APP_ID"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app

