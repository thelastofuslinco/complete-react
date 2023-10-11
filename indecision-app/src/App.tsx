import Route from './components/Route'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Playground from './pages/Playground'

const App = () => {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Playground', to: '/playground' }
  ]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gap: '1rem',
        paddingLeft: '1rem'
      }}
    >
      <Sidebar links={links} />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/playground">
        <Playground />
      </Route>
    </div>
  )
}

export default App
