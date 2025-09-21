import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Maincontent from './Components/Maincontent/Maincontent.jsx'
import Certificatesbymeta from './Components/Pages/Certificates/Certificatesbymeta.jsx'
import Certificatesbygoogle from './Components/Pages/Certificates/Certificatesbygoogle.jsx'
 import { ToastContainer } from 'react-toastify';
import Projects from './Components/Pages/Projects/Projects.jsx'
import Projectid from './Components/Pages/Projectid/Projectid.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    <Routes>
      <Route path='/' element={<App />} > 
      <Route index element={<Maincontent />}/>
      <Route path='certificates/meta' element={<Certificatesbymeta />}/>
      <Route path='certificates/google' element={<Certificatesbygoogle />}/>
      </Route>
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:projectid' element={<Projectid />} />
    </Routes>
    </BrowserRouter>
)
