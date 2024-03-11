import { lazy } from 'react'
import Route from './components/Route'
import Sidebar from './components/Sidebar'
import Switch from './components/Switch'
import NavigationProvider from './context/navigation'
import LoginPage from './pages/LoginPage'

const Playground = lazy(() => import('./pages/Playground'))
const Home = lazy(() => import('./pages/Home'))
const Expensify = lazy(() => import('./pages/Expensify'))
const NotFound = lazy(() => import('./pages/NotFound'))

const links = [
  { label: 'login', to: '/login' },
  { label: 'home', to: '/' },
  { label: 'expensify', to: '/expensify' },
  { label: 'playground', to: '/playground' }
]

const App = () => {
  return (
    <NavigationProvider>
      <Sidebar links={links} />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/playground">
          <Playground />
        </Route>
        <Route path="/expensify">
          <Expensify />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </NavigationProvider>
  )
}

export default App
