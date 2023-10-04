import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = event.target
    console.log(email.value, password.value)
  }

  return (
    <h1>
      Hello, worldd {count}
      <Button onClick={() => setCount((prevState) => prevState + 1)}>
        add
      </Button>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <Input name="email" placeholder="Email" />
        </label>
        <label>
          Password:
          <Input name="password" placeholder="password" />
        </label>
        <Button type="submit">submit</Button>
      </form>
    </h1>
  )
}

export default App
