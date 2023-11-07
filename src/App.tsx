import { lazy } from 'react'
import Route from './components/Route'
import Sidebar from './components/Sidebar'
import Switch from './components/Switch'
import NavigationProvider from './context/navigation'

const Playground = lazy(() => import('./pages/Playground'))
const Home = lazy(() => import('./pages/Home'))
const Expensify = lazy(() => import('./pages/Expensify'))

const links = [
  { label: 'home', to: '/' },
  { label: 'expensify', to: '/expensify' },
  { label: 'playground', to: '/playground' }
]

const App = () => {
  return (
    <NavigationProvider>
      <Sidebar links={links} />
      <Switch>
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
          <div>404</div>
        </Route>
      </Switch>
    </NavigationProvider>
  )
}

export default App
