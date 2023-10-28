import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import 'normalize.css'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import { store } from './store'

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
