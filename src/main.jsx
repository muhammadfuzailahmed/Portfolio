import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Maincontent from './Components/Maincontent/Maincontent.jsx'
import Certificatesbymeta from './Components/Pages/Certificates/Certificatesbymeta.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} > 
      <Route index element={<Maincontent />}/>
      <Route path='certificates/meta' element={<Certificatesbymeta />}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
