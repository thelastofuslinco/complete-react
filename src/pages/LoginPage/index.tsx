import { Component, ReactNode } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { RootState, logIn } from '../../store'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase'

interface Props extends PropsFromRedux {}

interface State {}

class LoginPage extends Component<Props, State> {
  signIn = async () => {
    const { user } = await signInWithEmailAndPassword(
      auth,
      'lincoln@mail.com',
      '12345678'
    )
    this.props.logIn({ uid: user.uid })
    localStorage.setItem('userData', JSON.stringify(user))
  }

  signInWhithGooggle = async () => {
    const { user } = await signInWithPopup(auth, googleProvider)
    this.props.logIn({ uid: user.uid })
    localStorage.setItem('userData', JSON.stringify(user))
  }

  render(): ReactNode {
    return (
      <main className="pageContainer">
        <div className="loginBox">
          Login Page
          <div className="loginButtons">
            <button onClick={this.signIn}>signIn in firebase</button>
            <button onClick={this.signInWhithGooggle}>
              signIn Whith Googgle
            </button>
          </div>
        </div>
      </main>
    )
  }
}

const conector = connect((state: RootState) => state.user, {
  logIn
})

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(LoginPage)
