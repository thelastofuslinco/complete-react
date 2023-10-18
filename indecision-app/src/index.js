import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import 'normalize.css'
import './styles/styles.scss'
import NavigationProvider from './context/navigation'

const root = createRoot(document.getElementById('root'))
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
)
