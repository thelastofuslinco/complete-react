import { lazy, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Switch from './components/Switch'
import NavigationProvider from './context/navigation'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import { ConnectedProps, connect } from 'react-redux'
import { RootState, logIn, logOut } from './store'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import PublicRoute from './components/PublicRoute'

const Playground = lazy(() => import('./pages/Playground'))
const Home = lazy(() => import('./pages/Home'))
const Expensify = lazy(() => import('./pages/Expensify'))
const NotFound = lazy(() => import('./pages/NotFound'))

const links = [
  { label: 'login', to: '/' },
  { label: 'home', to: '/home' },
  { label: 'expensify', to: '/expensify' },
  { label: 'playground', to: '/playground' }
]

const App = (props: PropsFromRedux) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        props.logIn(user)
        localStorage.setItem('userData', JSON.stringify(user))
      } else {
        localStorage.removeItem('userData')
        signOut(auth)
        props.logOut()
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <NavigationProvider>
      <Sidebar links={links} />
      <Switch>
        <PublicRoute path="/">
          <LoginPage />
        </PublicRoute>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/playground">
          <Playground />
        </PrivateRoute>
        <PrivateRoute path="/expensify">
          <Expensify />
        </PrivateRoute>
        <PrivateRoute path="*">
          <NotFound />
        </PrivateRoute>
      </Switch>
    </NavigationProvider>
  )
}

const conector = connect((state: RootState) => state.user, {
  logIn,
  logOut
})

type PropsFromRedux = ConnectedProps<typeof conector>

export default conector(App)
