import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { StrictMode } from 'react'
//  component > StrictMode mount ? > StrictMode unmount > mount

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
