import { initializeApp } from 'firebase/app'
import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth'
import { Database, getDatabase } from 'firebase/database'
import { getCookie, setCookie } from '../utils/cookies'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

const googleProvider = new GoogleAuthProvider()

let auth: Auth
let database: Database

const cookieAuth = getCookie('complete_react_auth')
const cookieDatabase = getCookie('complete_react_database')

if (!cookieAuth && !cookieDatabase) {
  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  database = getDatabase(app)
  setCookie('complete_react_auth', JSON.stringify(auth), 30)
  setCookie('complete_react_database', JSON.stringify(database), 30)
} else {
  auth = JSON.parse(cookieAuth)
  database = JSON.parse(cookieDatabase)
}

export { auth, database, googleProvider }
