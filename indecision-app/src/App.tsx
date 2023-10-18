import Route from './components/Route'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Playground from './pages/Playground'

const App = () => {
  const links = [
    { label: 'home', to: '/' },
    { label: 'playground', to: '/playground' }
  ]

  return (
    <>
      <Sidebar links={links} />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/playground">
        <Playground />
      </Route>
    </>
  )
}

export default App
