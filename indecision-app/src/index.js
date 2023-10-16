import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'
import NavigationProvider from './context/navigation'

const root = createRoot(document.getElementById('root'))
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
)
