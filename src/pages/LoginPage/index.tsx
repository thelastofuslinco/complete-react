import { Component, ReactNode } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import app from '../../firebase'

interface Props {}

interface State {}

class LoginPage extends Component<Props, State> {
  signIn = () => {
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, 'lincoln@mail.com', '12345678')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log('signIn', user)

        // ...
      })
      .catch((error) => {
        console.error(error)
      })
  }

  signInWhithGooggle = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }
  render(): ReactNode {
    return (
      <div>
        Login Page
        <div>
          <button onClick={this.signIn}>signIn in firebase</button>
          <button onClick={this.signInWhithGooggle}>
            signIn Whith Googgle
          </button>
        </div>
      </div>
    )
  }
}

export default LoginPage
