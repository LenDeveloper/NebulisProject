import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'

import Header from "./layers/Header";
import Body from "./layers/Body";
import Footer from "./layers/Footer";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
  // </StrictMode>,
)
