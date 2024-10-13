import { StrictMode } from 'react'
import { createRoot, Link } from 'react-dom/client'
// import App from './App.jsx'
import './assets/global.css'
import Banner from './components/Banner.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className='mx-auto pb-0.5 bg-neutral-950 scroll-smooth overflow-x-hidden'>
        <Banner />
        <Body />
        <Footer />
      </div>
    </>
  </StrictMode>,
)
