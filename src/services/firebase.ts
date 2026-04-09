/**
 * FIREBASE CONFIG - PLACEHOLDER
 * 1. Crea project Firebase
 * 2. Habilita Auth, Firestore, Storage
 * 3. Copia config aquí
 * 4. Colección 'productos'
 */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// PLACEHOLDER - Reemplaza con tu config
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "project.firebaseapp.com",
  projectId: "demo-ecommerce-modular",
  storageBucket: "project.appspot.com",
  messagingSenderId: "123",
  appId: "1:123"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app

