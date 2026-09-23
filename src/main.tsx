import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource/young-serif/400.css'
import '@fontsource-variable/figtree/index.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/chrome.css'
import './styles/home.css'
import './styles/pages.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
