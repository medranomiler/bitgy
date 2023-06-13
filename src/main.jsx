import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Features from './Features.jsx'
import Signup from './Signup.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Features />
    <Signup />
    <Footer />
  </React.StrictMode>,
)
