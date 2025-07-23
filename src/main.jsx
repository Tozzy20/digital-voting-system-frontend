// src/main.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Обратите внимание на .js
import './index.css' // Убедитесь, что эта строка есть

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)