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
    this.props.logIn(user)
  }

  signInWhithGooggle = async () => {
    const { user } = await signInWithPopup(auth, googleProvider)
    this.props.logIn(user)
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

const conector = connect((state: RootState) => state.user, {
  logIn
})

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(LoginPage)
