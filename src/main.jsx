import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AmorApp } from './AmorApp.jsx'
import { Mp3File } from './mp3file.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AmorApp />
      <Mp3File />
  </React.StrictMode>,
)
