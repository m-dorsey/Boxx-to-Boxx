
import './assets/styles/App.css'
import Home from './pages/Home'
import Fixtures from './pages/Fixtures'
import PickTeam from './pages/PickTeam'
import Points from './pages/Points'
import Statistics from './pages/Statistics'
import Transfers from './pages/Transfers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeamSites from './components/TeamSites'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import PageNotFound from './pages/PageNotFound'

const App = () => {

  return (
    <BrowserRouter>

      <TeamSites />
      <Hero />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/points" element={<Points />} />
        <Route path="/pick-team" element={<PickTeam />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
