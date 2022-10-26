import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes'
import './design/css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)