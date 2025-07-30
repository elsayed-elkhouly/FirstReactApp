import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
