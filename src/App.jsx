import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import {Themecontext} from  './Components/Contexts/Themecontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Themecontext>
      <Header />
      <Outlet />
      <Footer />
      </Themecontext>
    </>
  )
}

export default App
