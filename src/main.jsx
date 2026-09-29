import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Stairs from './components/common/Stairs.jsx'
import { NavProvider } from './context/NavContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavProvider>
          <App />
        </NavProvider>
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
