import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import 'normalize.css'
import './styles/styles.scss'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
