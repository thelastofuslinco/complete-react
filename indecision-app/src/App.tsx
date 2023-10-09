import Navigation from './components/Navigation'
import Counter from './playground/counter'
import Form from './playground/form'

const App = () => {
  const template = (
    <div>
      <h1>Lincoln Duarte</h1>
      <p>Age: 24</p>
      <p>Location: Maceio</p>
    </div>
  )

  return (
    <div>
      {template} <Navigation />
      <Form
        onSubmit={async (value) => {
          const response = await new Promise((resolve, reject) =>
            setTimeout(() => {
              resolve('aaaa')
            }, 2000)
          )
          console.log(response)
        }}
      />
      <Counter message="simple message" />
    </div>
  )
}

export default App
