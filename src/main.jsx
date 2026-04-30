import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AppsStoreProvider } from './context/AppStore .jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppsStoreProvider>
    <App />
    </AppsStoreProvider>
  </StrictMode>,
)
