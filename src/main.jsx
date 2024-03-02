import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import TeamSites from './components/TeamSites.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TeamSites />
    <Hero /> */}
    {/* <Navigation /> */}
    <App />
  </React.StrictMode>,
)
