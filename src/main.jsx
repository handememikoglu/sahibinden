import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './layout/MainLayout.jsx'
import './style/global.css'

createRoot(document.getElementById('root')).render(
  <MainLayout />
)
